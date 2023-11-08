import { useState } from "react";

function useModal(): [boolean, () => void, () => void, () => void] {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openCloseModal = () => (isModalOpen ? closeModal() : openModal());

  return [isModalOpen, openModal, closeModal, openCloseModal];
}

export default useModal;
