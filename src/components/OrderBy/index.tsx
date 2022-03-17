import React, { FC, useState } from "react";

import { OrderTypes } from "../../types/order";
import "./index.css";

const OrderBy: FC = () => {
  const [selected, setSelected] = useState(OrderTypes.Random);

  const onOrderChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (
      e.target.value === OrderTypes.Random ||
      e.target.value === OrderTypes.Prioprity
    ) {
      setSelected(e.target.value);
    }
  };
  return (
    <div className="App-sortby">
      <span className="App-sortby__label">Sort by: </span>
      <select
        className="App-sortby__select"
        id="filtersortby"
        onChange={onOrderChange}
        value={selected}
      >
        <option value={OrderTypes.Random}>Random</option>
        <option value={OrderTypes.Prioprity}>By Priority</option>
      </select>
    </div>
  );
};

export default OrderBy;
