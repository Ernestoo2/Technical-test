import React, { useState } from "react";
import DropdownItem from "./DropdownItems";


const Dropdown = ({ items }) => {
    const  [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return(
            <div className="dropdown">
                <button className="dropdown-toggle"  onClick={toggleDropdown}>
                    {items[0].label}
                </button>

                {isOpen && (
                    <ul className="Dropdown-menu">
                        {items.map((item) => (
                            <DropdownItem key={item.path} path={item.path} label={item.path}/>
                ))}
                    </ul>
                )}
            
            </div>
    );
};

export default Dropdown;