import React, { useState } from "react";
import "./Form.Style.css";

const columns = [{ name: "Name" }, { name: "Username" }, { name: "Actions" }];

export const FormView = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
  });

  const rows = [];

  const handleChange = (e) => {
    //console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    rows.push(data);
  };

  return (
    <>
      <div className="tittle">
        <h1>CRUD App with Hooks</h1>
      </div>
      <div className="app-form">
        <div className="form-add">
          <h2>Add User</h2>
          <form className="form-add-user" onSubmit={submitData}>
            <div>
              <input
                type="text"
                name="user"
                onChange={handleChange}
                placeholder="name"
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="view-user">
          <h2>View Users</h2>
          <div className="container-table">
            {columns.map((column) => (
              <div className="column">{columns.name}</div>
            ))}
            {rows.map((row) => (
              <>
                <div className="row">{row.name}</div>
                <div className="row">{row.username}</div>
                <div className="row">
                  <button className="butt">Edit</button>
                  <button className="butt">Delete</button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
