import React, { createContext, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { MachineType } from "../types/machineType";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  machineTypes: MachineType[];
  currentMachineType: MachineType | null;
  showModal: boolean;
  addingType: boolean;
  handleShowModal: () => void;
  handleAddType: () => void;
  handleAddMachine: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
    id: number
  ) => void;
};

// Create context
export const GlobalContext = createContext<ContextType>({} as ContextType);

export const GlobalProvider = ({ children }: ProviderProps) => {
  const { machineTypes } = useAppSelector((state) => state.machineType);
  const [showModal, setShowModal] = useState(false);
  const [addingType, setAddingType] = useState(false);
  const [currentMachineType, setCurrentMachineType] =
    useState<MachineType | null>(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleAddType = () => {
    setAddingType(true);
    handleShowModal();
  };

  const handleAddMachine = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    const machineType = machineTypes.find((item) => item.id === id);

    if (machineType) {
      setAddingType(false);
      setCurrentMachineType(machineType);
      handleShowModal();
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        machineTypes,
        showModal,
        addingType,
        currentMachineType,
        handleShowModal,
        handleAddType,
        handleAddMachine,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
