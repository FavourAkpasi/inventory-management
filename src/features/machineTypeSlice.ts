import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MachineType, Machine, Field } from "../types/machineType";

type InitialState = {
  machineTypes: MachineType[];
};

const initialState: InitialState = {
  machineTypes: [],
};

const machineTypeSlice = createSlice({
  name: "machineType",
  initialState,
  reducers: {
    createMachineType: (state, action: PayloadAction<MachineType>) => {
      state.machineTypes = [...state.machineTypes, action.payload];
    },
    createNewMachine: (state, action: PayloadAction<Machine>) => {
      const machineType = state.machineTypes.find(
        (item) => item.id === action.payload.typeId
      );
      if (machineType) {
        machineType.machines.push(action.payload);
      }
    },
  },
});

export default machineTypeSlice.reducer;
export const { createMachineType, createNewMachine } = machineTypeSlice.actions;
