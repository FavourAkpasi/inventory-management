import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { removeMachineType } from "../features/machineSlice";
import { Button } from "../styles/styles";
import { MachineType } from "../types/types";
import { GlobalContext } from "./../context/GlobalState";
import styled from "styled-components";

const Container = styled.div<any>`
  max-width: 1440px;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 1rem;
`;

const Box = styled.div<any>`
  width: 30%;
  height: auto;
  background: #f7f7f7;
  padding: 1rem;
  border: 2px solid #000;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 45%;
  }
`;

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
    <Container>
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
