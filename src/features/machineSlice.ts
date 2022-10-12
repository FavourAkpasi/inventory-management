import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Machine, MachineType } from "../types/types";

// manage states.

// initial state
const initialState: InitialState = {
  machineTypes: [],
};

// reducer
const machineSlice = createSlice({
  name: "machne",
  initialState,
  reducers: {
    // add new machine type to the array of machine types.
    createMachineType: (
      state: { machineTypes: any[] },
      action: PayloadAction<MachineType>
    ) => {
      state.machineTypes = [...state.machineTypes, action.payload];
    },
    // create new machines based onmachine types
    createMachine: (
      state: { machineTypes: any[] },
      action: PayloadAction<Machine>
    ) => {
      //find the machine type or machine category
      const machineType = state.machineTypes.find(
        (item: { id: number }) => item.id === action.payload.machineTypeId
      );
      // add the new machine to it
      if (machineType) {
        machineType.machines = [...machineType.machines, action.payload];
      }
    },
    // this action increments the quantity of machines in a machine type
    incMachineQuantity: (
      state: { machineTypes: any[] },
      action: PayloadAction<Machine>
    ) => {
      const machineType = state.machineTypes.find(
        (item: { id: number }) => item.id === action.payload.machineTypeId
      );
      if (machineType) {
        const machine = machineType.machines.find(
          (item: { name: string }) => item.name === action.payload.name
        );

        if (machine) {
          machine.quantity++;
        }
      }
    },
    // this action decreases the quantity of machines in a machine type
    decMachineQuantity: (
      state: { machineTypes: any[] },
      action: PayloadAction<Machine>
    ) => {
      const machineType = state.machineTypes.find(
        (item: { id: number }) => item.id === action.payload.machineTypeId
      );
      if (machineType) {
        const machine = machineType.machines.find(
          (item: { name: string }) => item.name === action.payload.name
        );

        if (machine) {
          machine.quantity > 1 && machine.quantity--;
        }
      }
    },
    // delete a machine from a machine type
    removeMachine: (
      state: { machineTypes: any[] },
      action: PayloadAction<Machine>
    ) => {
      const machineType = state.machineTypes.find(
        (item: { id: number }) => item.id === action.payload.machineTypeId
      );
      if (machineType) {
        machineType.machines = machineType.machines.filter(
          (item: { id: number }) => item.id !== action.payload.id
        );
      }
    },
    // delete a machine type
    removeMachineType: (
      state: { machineTypes: any[] },
      action: PayloadAction<MachineType>
    ) => {
      state.machineTypes = state.machineTypes.filter(
        (item: { id: number }) => item.id !== action.payload.id
      );
    },
  },
});
export default machineSlice.reducer;

export const {
  createMachineType,
  createMachine,
  incMachineQuantity,
  decMachineQuantity,
  removeMachine,
  removeMachineType,
} = machineSlice.actions;
