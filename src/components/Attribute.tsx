import { useState } from "react";
type Attribute = {
  attribute: any;
};

const Attribute = ({ attribute }: Attribute) => {
  const [value, setValue] = useState<any | undefined>(undefined);
  return (
    <div style={{ display: "flex" }}>
      <input
        type={attribute}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button">Add</button>
    </div>
  );
};

export default Attribute;
