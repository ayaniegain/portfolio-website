import { React, useState } from "react";
import Home from "../../pages/Home";
import Menus from "../Menus/Menus";
import "./layout.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Layout() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar": "sidebar"}>
          <div className="sidebar-toggle-icons">
            <Menus/>
            <p onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <AiOutlineDoubleRight size={30} />
                ) : (
                <AiOutlineDoubleLeft size={30} />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
