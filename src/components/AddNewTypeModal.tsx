import {
  Box,
  Button,
  Form,
  Input,
  List,
  ListItem,
  Modal,
  ModalWrapper,
  Select,
} from "./../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import { SetStateAction, useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Field, MachineType } from "../types/types";
import { useAppDispatch } from "../app/hooks";
import { createMachineType } from "../features/machineSlice";

// this is the modal for adding a new machine type.
const AddNewTypeModal = () => {
  const { setShowTypeModal } = useContext(GlobalContext);
  const [fieldTypes, setFieldTypes] = useState<Field[]>([]);
  const [label, setLabel] = useState("");
  const [fieldType, setFieldType] = useState<string | null>(null);
  const [machineType, setMachineType] = useState("");
  const fields = ["text", "date", "number"];

  const dispatch = useAppDispatch();

  const handleAddNewField = () => {
    const newFieldType: Field = {
      label,
      fieldType,
    };
    setFieldTypes([...fieldTypes, newFieldType]);
    setLabel("");
    setFieldType(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMachineType: MachineType = {
      id: Date.now(),
      name: machineType,
      fields: fieldTypes,
      machines: [],
    };

    dispatch(createMachineType(newMachineType));
    setShowTypeModal(false);
  };

  return (
    <ModalWrapper>
      <Modal>
        <Button modalBtn onClick={() => setShowTypeModal(false)}>
          <CloseIcon />
        </Button>
        <Form modalForm col>
          <Input
            type="text"
            placeholder="Machine type name..."
            modalInput
            value={machineType}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setMachineType(e.target.value)
            }
          />

          <p>Add fields for this Machine Category:</p>
          <Input
            type="text"
            placeholder="Label..."
            modalInput
            value={label}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setLabel(e.target.value)
            }
          />
          <Select
            modalSelect
            defaultValue="Field type, E.g: Date..."
            onChange={(e: {
              target: { value: SetStateAction<string | null> };
            }) => setFieldType(e.target.value)}
          >
            <option value="Field type, E.g: Date..." disabled hidden>
              Field type, E.g: Date...
            </option>
            {fields.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <Button
            type="button"
            w="150px"
            p=".8rem 1.5rem"
            radius="rounded"
            onClick={handleAddNewField}
          >
            Add Field
          </Button>

          <h3>Fields</h3>
          <Box>
            <List>
              {fieldTypes.map((item, index) => (
                <ListItem key={index}>{item.label}</ListItem>
              ))}
            </List>
          </Box>

          <Button
            w="150px"
            p=".8rem 1.5rem"
            radius="rounded"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </ModalWrapper>
  );
};

export default AddNewTypeModal;
