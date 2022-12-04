import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const Index = () => {
  const [fol, setFol] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Firdavsbek2006/followers")
      .then((res) => {
        setFol(res.data);
      })
      .catch((err) => console.log("Error"));
  }, []);
  console.log(fol);
  return (
    <>
      <div className="follow">
        <ul className="follow__list">
          {fol.map((e) => {
            return (
              <li className="follow__item" key={e.id}>
                <a href={e.html_url}>
                  <div className="follow__card d-flex gap-3">
                    <img
                      className="rounded-circle"
                      src={e.avatar_url}
                      alt="Avatar"
                      width="50"
                      height="50"
                    />
                    <p className="follow__text">{e.login}</p>
                    <button className="btnnn">Follow</button>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Index;
