import { useState } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  const [title, setTitle] = useState();
  const [des, setDes] = useState();

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };

  const handelDes = (e) => {
    setDes(e.target.value);
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/addnotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, des }),
    });
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <label htmlFor="">Title</label>
        <input type="text" onChange={handelTitle} />
        <label htmlFor="des">Description</label>
        <input type="text" onChange={handelDes} />
        <button type="submit">Add</button>
        <Link to="/" className="link">
          Home
        </Link>
      </form>
    </div>
  );
};
