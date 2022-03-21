import React, { FC, useState } from "react";

import { OrderTypes } from "../../types/order";
import "./index.css";

type OrderByProps = {
  onOrderSelection: (order: OrderTypes) => void;
}

const OrderBy: FC<OrderByProps> = ({ onOrderSelection }) => {
  const [selected, setSelected] = useState(OrderTypes.Random);

  const onOrderChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (
      e.target.value === OrderTypes.Random ||
      e.target.value === OrderTypes.Priority
    ) {
      setSelected(e.target.value);
      onOrderSelection(e.target.value)
    }
  };

  return (
    <div className="App-sortby">
      <label htmlFor="filtersortby" className="App-sortby__label">Sort by: </label>
      <select
        className="App-sortby__select"
        id="filtersortby"
        onChange={onOrderChange}
        value={selected}
      >
        <option value={OrderTypes.Random}>Random</option>
        <option value={OrderTypes.Priority}>By Priority</option>
      </select>
    </div>
  );
};

export default OrderBy;
