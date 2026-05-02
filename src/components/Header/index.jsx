import React from "react";
import PropTypes, { func } from "prop-types";
import "./style.scss";

function Header(props) {
    return (
        <div className="header">
            <h1>Todo List</h1>
        </div>
    );
}

export default Header;