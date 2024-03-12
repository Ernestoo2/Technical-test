import React from "react";
import { NavLink } from "react-router-dom";

const DropdownItem = ({ path, label }) => {
    return (
        <div>
            <li className="dropdown-item">
                <NavLink to={path}>{label}</NavLink>
            </li>
        </div>



    );

};
export default DropdownItem;