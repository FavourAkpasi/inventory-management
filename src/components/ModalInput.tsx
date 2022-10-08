import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Machine, MachineType } from "../types/machineType";
import {
  createMachineType,
  createNewMachine,
} from "../features/machineTypeSlice";
import { useAppDispatch } from "../app/hooks";
import DropDown from "./Dropdown";
import Attribute from "./Attribute";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 2rem 0;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
const Modal = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 5rem 2rem;
  background-color: #fff;
  position: relative;
  border-radius: 1rem;
  margin: auto;
  & .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

const ModalInput = () => {
  const { machineTypes, handleShowModal, addingType, currentMachineType } =
    useContext(GlobalContext);
  const fields = ["Date", "Number", "text", "checkbox"];

  const [typeForm, setTypeForm] = useState({
    machineType: "",
  });
  const [machineTitle, setMachineTitle] = useState("");
  const [addingField, setAddingField] = useState(false);
  const [currentAttribute, setCurrentAttribute] = useState<any | null>(null);

  const dispatch = useAppDispatch();

  const createType = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newType: MachineType = {
      id: Date.now(),
      title: "",
      fields: [],
      machines: [],
    };

    dispatch(createMachineType(newType));
    // setTypeTitle("");
  };

  const createMachine = (
    id: number | undefined,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const machineType = machineTypes.find((item) => item.id === id);

    if (machineType) {
      const newMachine: Machine = {
        id: Date.now(),
        typeId: machineType.id,
        typeTitle: machineType.title,
        title: machineTitle,
      };

      dispatch(createNewMachine(newMachine));
      setMachineTitle("");
    }
  };

  const handleCurrentAttribute = (id: number) => {
    const newAttribute = fields.find((item, index) => index === id);

    if (newAttribute) {
      setCurrentAttribute(newAttribute);
      setAddingField(true);
      console.log(currentAttribute);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <CloseIcon className="close" onClick={handleShowModal} />
        {addingType ? (
          <form onSubmit={createType}>
            <input type="text" />
            <DropDown text="Add Field">
              {fields.map((item, index) => (
                <div key={index} onClick={() => handleCurrentAttribute(index)}>
                  {item}
                </div>
              ))}
            </DropDown>
            {addingField && <Attribute attribute={currentAttribute} />}
            <button type="submit">submit type</button>
          </form>
        ) : (
          <form onSubmit={(e) => createMachine(currentMachineType?.id, e)}>
            <input
              type="text"
              defaultValue={currentMachineType?.title}
              disabled
            />
            <input
              type="text"
              value={machineTitle}
              onChange={(e) => setMachineTitle(e.target.value)}
            />
            <button type="submit">submit machine</button>
          </form>
        )}
      </Modal>
    </ModalContainer>
  );
};

export default ModalInput;
