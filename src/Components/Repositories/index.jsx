import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const Index = () => {
  const [repp, setRepp] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Firdavsbek2006/repos")
      .then((res) => {
        setRepp(res.data);
      })
      .catch((err) => console.log("Error"));
  }, []);

  const date = new Date();
  return (
    <>
      <div className="repos">
        <form>
          <input
            className="rep__input"
            type="search"
            placeholder="Find a repository..."
          />
          <div className="button-wrapper">
            <button className="type">
              Type
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                className="bi bi-caret-down-fill pppp"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            <button className="type">
              Language
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                className="bi bi-caret-down-fill pppp"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            <button className="type">
              Sort
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="currentColor"
                className="bi bi-caret-down-fill pppp"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          </div>
          <button className="new">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-repo UnderlineNav-octicon hide-sm ooo"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            New
          </button>
        </form>
        <ul className="repos__list d-flex flex-column gap-2 justify-content-between">
          {repp.map((e) => {
            return (
              <li className="repos__item" key={e.id}>
                <a href={e.svn_url}>
                  <div className="repos__card">
                    <div className="wrapper">
                      <div className="button-div">
                        <button className="btn-secondary">Star</button>
                        <button className="btn-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            fill="currentColor"
                            className="bi bi-caret-down-fill ppp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        </button>
                        <span className="kuchli"></span>
                        <div className="starrrr">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star starrr"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="repos__card-title">{e.name}</p>
                      <span className="repos__public">{e.visibility}</span>
                    </div>
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
                      <span className="repos__day">
                        updated at {date.getFullYear(e.updated_at)}
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
