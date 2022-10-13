// import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  background-color: gray;
  width: 100vw;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
const Box = styled.div<any>`
  width: 10rem;
  height: 2.5rem;
  position: relative;
  z-index: 5;
  background: #f7f7f7;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => (props.card ? "1rem" : props.p)};
  border-radius: ${(props) => props.radius};
  border: ${(props) => (props.card ? "2px solid #dfdfdf" : props.border)};
  transition: all 0.5s ease;
  z-index: ${(props) => props.zi};
  margin: ${(props) => props.m};
  display: ${(props) => (props.card ? "flex" : props.flex)};
  flex-direction: ${(props) => (props.card ? "column" : props.direction)};
  gap: ${(props) => (props.card ? "10px" : props.gap)};
  align-items: ${(props) =>
    props.Ycenter
      ? "center"
      : props.Yaround
      ? "space-around"
      : props.Ybetween
      ? "space-between"
      : ""};
  justify-content: ${(props) =>
    props.Xcenter
      ? "center"
      : props.Xaround
      ? "space-around"
      : props.Xbetween
      ? "space-between"
      : ""};
  cursor: ${(props) => (props.card ? "pointer" : props.cursor)};
  &:hover {
    transform: ${(props) => (props.card ? "scale(1.05)" : "")};
  }
`;

const Button = styled.button<any>`
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  border: none;
  outline: none;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: pointer;
`;

const DropdownBox = styled.div<any>`
  width: 100%;
  position: absolute;
  background: #000;
  left: 0;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.active ? "transform: translateY(0)" : "translateY(-100%)"};
  z-index: -1;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
`;

const List = styled.ul<any>``;

const ListItem = styled.li<any>`
  list-style-type: none;
  padding: 0.5rem 1rem;
  background: none;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
`;

const Header = () => {
  const {
    showTypeModal,
    setShowTypeModal,
    showMachineModal,
    setShowMachineModal,
    machineTypes,
    setCurrentMachineType,
  } = useContext(GlobalContext);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleAddNewTypeModal = () => {
    setShowTypeModal(!showTypeModal);
    setDropdown(false);
  };

  const handleAddNewMachine = (id: number) => {
    const machineType = machineTypes.find((item) => item.id === id);

    if (machineType) {
      setCurrentMachineType(machineType);
    }

    setShowMachineModal(!showMachineModal);
    setDropdown(false);
  };

  const navigate = useNavigate();

  return (
    <Nav>
      <Container>
        <Logo onClick={() => navigate("/")}>ManageX</Logo>

        {/* <Form w="300px" h="40px">
          <Input type="text" placeholder="Search" w="85%" radius="left" />
          <Button w="15%" radius="right">
            <SearchIcon />
          </Button>
        </Form> */}

        <Box>
          <Button onClick={handleDropdown}>Add New Inventory</Button>

          <DropdownBox active={dropdown && true}>
            <Button bg="#2d3531" color="#fff" onClick={handleAddNewTypeModal}>
              Add New Type
            </Button>
            <List>
              {machineTypes.map((item) => (
                <ListItem
                  key={item.id}
                  onClick={() => handleAddNewMachine(item.id)}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </DropdownBox>
        </Box>
      </Container>
    </Nav>
  );
};

export default Header;
