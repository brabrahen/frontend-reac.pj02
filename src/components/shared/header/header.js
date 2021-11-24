import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { sidebarDados } from "./sidebar";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-nav">
        <div className="txt-header">
          <h1>To/Do List</h1>
        </div>
      </div>

      <nav className="nav-menu">
        <ul className="nav-itens">
          <li className="nav-tg" />
          {sidebarDados.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
