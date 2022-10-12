import React, { createContext, useState } from "react";
import { MachineType } from "../types/types";
import { useAppSelector } from "./../app/hooks";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  showTypeModal: boolean;
  showMachineModal: boolean;
  machineTypes: MachineType[];
  currentMachineType: MachineType | null;
  setShowTypeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMachineModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMachineType: React.Dispatch<
    React.SetStateAction<MachineType | null>
  >;
};

export const GlobalContext = createContext<ContextType>({} as ContextType);

export const GlobalProvider = ({ children }: ProviderProps) => {
  const { machineTypes } = useAppSelector((state) => state.persistedReducer);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showMachineModal, setShowMachineModal] = useState(false);
  const [currentMachineType, setCurrentMachineType] =
    useState<MachineType | null>(null);

  // pass the states and functions down to the components that need them.
  return (
    <GlobalContext.Provider
      value={{
        showTypeModal,
        showMachineModal,
        currentMachineType,
        setShowMachineModal,
        setShowTypeModal,
        machineTypes,
        setCurrentMachineType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
