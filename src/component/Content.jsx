import React from "react";
import CheckListItem from "./CheckListItem";
import todoData from "../assets/todoData";

const Content = () => {
  const myComponents = todoData.map((item) => (
    <CheckListItem key={item.id} item={item} />
  ));
  return (
    <div>
      <h1>To do List</h1>
      <ul>{myComponents}</ul>
    </div>
  );
};

export default Content;
