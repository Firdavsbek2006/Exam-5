import React from "react";
import Header from "./Components/Header/index";
import Avatar from "./Components/Avatar";
import Side from "./Components/Main-side";
import Footer from "./Components/Footer";
import "./index.css"


function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <span className="hr"></span>
          <div className="containerr">
            <div className="avatarr d-flex justify-content-between">
              <Avatar />
              <Side/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
