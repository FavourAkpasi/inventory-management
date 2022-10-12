import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { GlobalContext } from "../context/GlobalState";
import {
  decMachineQuantity,
  incMachineQuantity,
  removeMachine,
} from "../features/machineSlice";
import { Box, Button, Container, Nav } from "../styles/styles";

const Details = () => {
  const {
    machineTypes,
    setCurrentMachineType,
    setShowMachineModal,
    showMachineModal,
  } = useContext(GlobalContext);
  const params = useParams();
  const machineTypeId = Number(params.machineTypeId);
  const machineType = machineTypes.find((item) => item.id === machineTypeId);
  const machines = machineType?.machines;

  const handleAddNewMachine = (id: number | undefined) => {
    const machineType = machineTypes.find((item) => item.id === id);

    if (machineType) {
      setCurrentMachineType(machineType);
    }

    setShowMachineModal(!showMachineModal);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (machineType === undefined) {
      navigate("/");
    }
  }, [machineType, navigate]);

  return (
    <div>
      <Nav bg="#000">
        <Container Ycenter Xbetween style={{ padding: "1rem 6rem" }}>
          <Button
            p=".5rem 1rem"
            radius="rounded"
            onClick={() => handleAddNewMachine(machineType?.id)}
          >
            Add new {machineType?.name}
          </Button>
          <h2 style={{ color: "#fff" }}>{machineType?.name}</h2>
          <h3 style={{ color: "#fff" }}>
            Total Machines:{" "}
            {machineType?.machines.reduce(
              (a, value) => (a = a + Number(value.quantity)),
              0
            )}
          </h3>
        </Container>
      </Nav>
      <Container gap="10px">
        {machines?.map((item) => (
          <Box key={item.id} card flex>
            <h4>Model: {item.name}</h4>
            <p>Category ID: {item.machineTypeId}</p>
            <p>Machine ID: {item.id}</p>
            <Box flex="flex" Ycenter gap="20px" Xcenter>
              <Button
                w="30px"
                p=".3rem 0"
                bg="#2d3531"
                color="#fff"
                onClick={() => dispatch(decMachineQuantity(item))}
              >
                -
              </Button>
              <p>Quantity: {item.quantity}</p>
              <Button
                w="30px"
                p=".3rem 0"
                bg="#2d3531"
                color="#fff"
                onClick={() => dispatch(incMachineQuantity(item))}
              >
                +
              </Button>
            </Box>
            <Button
              p=".5rem 0"
              bg="#2d3531"
              color="#fff"
              onClick={() => dispatch(removeMachine(item))}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Details;
