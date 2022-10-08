import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const DropdownContainer = styled.div`
  width: 180px;
  height: auto;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: aliceblue;
  z-index: 10;
`;
const AddButton = styled.button`
  width: 100%;
  padding: 1rem 0;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  transition: 0.5s ease all;
  transform: translateY(-100);
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f2;

  &.show {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  & div {
    padding: 1rem;
  }
`;

const DropDown = ({ children, text }: any) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <DropdownContainer>
      <AddButton type="button" onClick={handleDropdown}>
        {text}
      </AddButton>
      <Dropdown className={`${dropdown && "show"}`}>{children}</Dropdown>
    </DropdownContainer>
  );
};

export default DropDown;
