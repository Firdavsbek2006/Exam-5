import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const Index = () => {
  const [over, setOver] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Firdavsbek2006/repos")
      .then((res) => {
        setOver(res.data);
      })
      .catch((err) => console.log("Error"));
  }, []);

  const reposes = over.splice(1, 6);
  console.log(reposes);

  return (
    <>
      <div className="overview">
        <div className="overview__top d-flex justify-content-between align-items-center">
          <p className="overview__title">Popular repositories</p>
          <p className="overview__text">Customize your pins</p>
        </div>
        <ul className="overview__list d-flex flex-wrap justify-content-between">
          {reposes.map((e) => {
            return (
              <li className="overview__item" key={e.id}>
                <a href={e.svn_url}>
                  <div className="overview__card">
                    <p className="overview__card-title">{e.name}</p>
                    <span className="overview__public">{e.visibility}</span>
                    <div className="overview__desc">
                      <div
                        className={
                          e.language === "HTML"
                            ? "dumaloq red"
                            : e.language ==="CSS"
                            ? "dumaloq pirple"
                            : e.language === "JavaScript"
                            ? "dumaloq yellow"
                            : e.language === "SCSS"
                            ? "dumaloq pink"
                            : "dumaloq"
                        }
                      ></div>
                      <span className="overview__lang">{e.language}</span>
                      <span className="overview__star">
                        {e.stargazers_count}
                      </span>
                    </div>
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
