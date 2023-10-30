import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((item) => setData(item))
    .catch((error) => console.error("Error:", error));

  return (
    <>
      <div className="wraper">
        {data.map((data, index) => {
          return (
            <div key={index} className="card">
              <div className="title">{data.title}</div>
              <div>{data.des}</div>
              <button
                onClick={() => {
                  fetch(`http://localhost:3000/edit/${data.id}`);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  fetch(`http://localhost:3000/delete/${data.id}`, {
                    method: "DELETE",
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <Link to="Card" className="link">
          ADD
        </Link>
      </div>
    </>
  );
};
