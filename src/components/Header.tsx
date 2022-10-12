import {
  Container,
  Form,
  Logo,
  Nav,
  Input,
  Button,
  Box,
  DropdownBox,
  List,
  ListItem,
} from "../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { useNavigate } from "react-router-dom";

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
    <Nav bg="grey">
      <Container Ycenter Xbetween>
        <Logo onClick={() => navigate("/")}>ManageX</Logo>

        <Form w="300px" h="40px">
          <Input type="text" placeholder="Search" w="85%" radius="left" />
          <Button w="15%" radius="right">
            <SearchIcon />
          </Button>
        </Form>

        <Box w="180px" h="40px" pos="relative" zi="5">
          <Button
            w="100%"
            h="100%"
            radius={dropdown ? "" : "rounded"}
            onClick={handleDropdown}
          >
            Add New Inventory
          </Button>

          <DropdownBox
            pos="absolute"
            w="100%"
            left="0"
            bg="#000"
            active={dropdown && true}
          >
            <Button
              w="100%"
              p=".8rem 0"
              bg="#2d3531"
              color="#fff"
              onClick={handleAddNewTypeModal}
            >
              Add New Type
            </Button>
            <List>
              {machineTypes.map((item) => (
                <ListItem
                  key={item.id}
                  navItem
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
