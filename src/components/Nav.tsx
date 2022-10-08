import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import DropDown from "./Dropdown";

const Navbar = styled.nav`
  /* max-width: 1440px; */
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid black;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const SearchBox = styled.div`
  width: 40%;
  height: 2rem;
  border: 1px solid black;
`;

const Nav = () => {
  const { machineTypes, handleAddMachine, handleAddType } =
    useContext(GlobalContext);

  return (
    <Navbar>
      <Logo>ManageX</Logo>
      <SearchBox></SearchBox>
      <DropDown text="add">
        <div onClick={handleAddType}>Add New Type</div>
        {machineTypes.map((item) => (
          <div key={item.id} onClick={(e) => handleAddMachine(e, item.id)}>
            {item.title}
          </div>
        ))}
      </DropDown>
    </Navbar>
  );
};

export default Nav;
