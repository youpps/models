import { useEffect, useRef } from "react";

const useOutsideClick = (callback: Function) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
