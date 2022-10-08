import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Details = () => {
  const { machineTypes } = useContext(GlobalContext);
  const params = useParams();
  const typeId = Number(params.typeId);
  const machineType = machineTypes.find((item) => item.id === typeId);

  return (
    <div>
      {machineType?.machines.map((item) => (
        <div key={item.id}>
          <p>Type title: {item.typeTitle}</p>
          <p>Machine title: {item.title}</p>
          <p>ISBN: {item.typeId}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
