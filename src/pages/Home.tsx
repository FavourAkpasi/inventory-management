import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { removeMachineType } from "../features/machineSlice";
import { Box, Button, Container } from "../styles/styles";
import { MachineType } from "../types/types";
import { GlobalContext } from "./../context/GlobalState";

const Home = () => {
  const { machineTypes } = useContext(GlobalContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: MachineType
  ) => {
    e.stopPropagation();
    dispatch(removeMachineType(item));
  };

  return (
    <Container gap="10px">
      {machineTypes.map((item) => (
        <Box flex card key={item.id} onClick={() => navigate(`${item.id}`)}>
          <h4>Type: {item.name}</h4>
          <p>
            <b>Id:</b> {item.id}
          </p>
          <p>
            <b>{item.name}s:</b>
            {item.machines.reduce(
              (a, value) => (a = a + Number(value.quantity)),
              0
            )}
          </p>
          <Button
            p=".5rem 0"
            bg="#444444"
            color="#fff"
            onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) =>
              removeType(e, item)
            }
          >
            Delete
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
