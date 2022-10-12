import { Button, Form, Input, Modal, ModalWrapper } from "../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import { SetStateAction, useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Machine } from "../types/types";
import { useAppDispatch } from "../app/hooks";
import { createMachine, incMachineQuantity } from "../features/machineSlice";

const AddNewMachineModal = () => {
  const { setShowMachineModal, currentMachineType } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);
  const [model, setModel] = useState("");

  const dispatch = useAppDispatch();

  // add  new machine
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentMachineType) {
      const newMachine: Machine = {
        id: Date.now(),
        machineTypeId: currentMachineType.id,
        machineTypeName: currentMachineType.name,
        name: model,
        quantity,
      };
      if (
        currentMachineType.machines.some(
          (item) => item.name === newMachine.name
        )
      ) {
        dispatch(incMachineQuantity(newMachine));
      } else {
        dispatch(createMachine(newMachine));
      }
    }
    setShowMachineModal(false);
  };

  return (
    <ModalWrapper>
      <Modal>
        <Button modalBtn onClick={() => setShowMachineModal(false)}>
          <CloseIcon />
        </Button>
        <Form modalForm col onSubmit={handleSubmit}>
          <Input
            modalInput
            type="text"
            defaultValue={currentMachineType?.name}
          />
          <Input
            modalInput
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setModel(e.target.value)
            }
          />
          <Input
            modalInput
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e: { target: { value: SetStateAction<number> } }) =>
              setQuantity(e.target.value)
            }
          />
          {currentMachineType?.fields.map((item, index) => (
            <Input
              key={index}
              type={item.fieldType}
              placeholder={item.label}
              modalInput
            />
          ))}

          <Button w="150px" p=".8rem 1.5rem" radius="rounded">
            Submit
          </Button>
        </Form>
      </Modal>
    </ModalWrapper>
  );
};

export default AddNewMachineModal;
