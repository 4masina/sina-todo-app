import React from "react";
import todoData from "../assets/todoData";

const myItems = ({ id, text, completed }) => (
  <div className="items">
    <ul>
      <li>{text}</li>
    </ul>
  </div>
);

const CheckListItem = ({ todoData }) => {
  const itemList = todoData.map((myItems) => {
    todoData;
  });
};

export default CheckListItem;
