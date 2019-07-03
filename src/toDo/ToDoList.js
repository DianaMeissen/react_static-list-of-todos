import React from "react";

import ToDoItem from "../toDo/ToDoItem";
import User from "../user/User";
import "../toDo/TableStyle.css";

const ToDoList = ({ toDoItems, sortBy }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              sortBy("completed");
            }}
            className="table-border pointer"
          >
            Is completed
          </th>
          <th
            onClick={() => {
              sortBy("title");
            }}
            className="table-border pointer"
          >
            ToDo item
          </th>
          <th
            onClick={() => {
              sortBy("user");
            }}
            className="table-border pointer"
          >
            User
          </th>
        </tr>
      </thead>
      <tbody>
        {toDoItems.map(item => {
          return (
            <tr>
              <ToDoItem key={item.id} item={item} />
              <User user={item.user} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;