import React from "react";
import {Route, Routes} from "react-router-dom";
import "./index.scss";
import Overview from "../Overview";
import Repositories from "../Repositories";
import Followers from "../Followers";
import Following from "../Following";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/repositories" element={<Repositories/>}/>
        <Route path="/followers" element={<Followers/>}/>
        <Route path="/following" element={<Following/>}/>
      </Routes>
    </>
  );
};

export default index;
