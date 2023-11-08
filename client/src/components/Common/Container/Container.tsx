import React, { FC, PropsWithChildren } from "react";
import { ContainerBlock } from "./ContainerStyles";

interface IContainer {
  width?: number;
}

const Container: FC<PropsWithChildren<IContainer>> = ({ children, width = 1255 }) => {
  return <ContainerBlock width={width}>{children}</ContainerBlock>;
};

export default Container;
