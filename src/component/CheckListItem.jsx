import React from "react";
import { todoData } from "../assets/todoData";

const myComponents = todoData.map(({ id, text, completed }) => (
  <MyComponent key={id} myFirstProps={text} mySecondProp={completed} />
));

const CheckListItem = () => {
  return (
    <div>
      <ul>
        <li>Eat</li>
        <li>Pray</li>
        <li>Love</li>
      </ul>
    </div>
  );
};

export default CheckListItem;
