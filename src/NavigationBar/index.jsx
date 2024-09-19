import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default index;
