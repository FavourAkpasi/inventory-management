import { Delete } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Type = styled.div`
  width: 10rem;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
const Number = styled.h1`
  font-weight: bold;
`;
const Name = styled.h3`
  font-weight: bold;
`;
const Manage = styled.div`
  display: flex;
`;

const Home = () => {
  const { machineTypes, handleAddMachine } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();

    navigate(`/${id}`);
  };

  return (
    <>
      {machineTypes.map((item) => (
        <Type key={item.id} onClick={(e) => handleNavigate(e, item.id)}>
          <Number>{item.machines.length}</Number>
          <Name>{item.title}</Name>

          <Manage>
            <Delete />
            <SettingsIcon />
            <button onClick={(e) => handleAddMachine(e, item.id)}>+</button>
          </Manage>
        </Type>
      ))}
    </>
  );
};

export default Home;
