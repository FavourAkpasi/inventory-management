export type Field = {
  label: string;
  fieldType: string | null;
};

export type Machine = {
  id: number;
  machineTypeId: number;
  machineTypeName: string;
  name: string;
  quantity: number;
};

export type MachineType = {
  id: number;
  name: string;
  fields: Field[];
  machines: Machine[];
};

export type InitialState = {
  machineTypes: MachineType[];
};
