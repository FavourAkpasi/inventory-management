export type Machine = {
  id: number;
  typeId: number;
  typeTitle: string;
  title: string;
};

export type Field = {
  attribute: any;
};

export type MachineType = {
  id: number;
  title: string;
  fields: Field[];
  machines: Machine[];
};
