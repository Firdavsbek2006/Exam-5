import React from "react";
import "./index.scss";
import Link from "../Link";
import Routes from "../Routes";

const index = () => {
  return (
    <>
      <div className="link">
        <div className="link-wrapper">
          <Link/>
        </div>
          <Routes/>
      </div>
    </>
  );
};

export default index;
