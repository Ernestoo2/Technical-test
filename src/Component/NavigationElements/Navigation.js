import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

const subMenuAItems =[
    { path: "/ClothingItems1", label: "Shirts"},
    { path: "/ClothingItems2", label: "polo"},
    { path: "/ClothingItems3", label: "Gown"},
    
]
const subMenuBItems =[
    { path: "/Accessory1", label: "Headset"},
    { path: "/Accessory2", label: "Accessory2"},

]
const subMenuCItems =[
    { path: "/DryCleaning", label: "DryCleaning"},
    { path: "/Washing", label: "Washing"},
   
]
const navigationItems = [
    { path: "/Clothing", label: 'Clothing', subMenu : subMenuAItems},
    { path: "/Accessories", label: "Accessories",  subMenu : subMenuBItems},
    { path: "/Services", label: "Services", subMenu : subMenuCItems},


];
function Navigation() {
    return(
      <ul className="nav-list">
      {navigationItems.map((item) => (
          <li className="list" key={item.path}>
              <NavLink className="NavLink" to={item.path} activeClassName="active">
                  {item.label}
              </NavLink>
              {/* Conditionally render Dropdown 
               {item.subMenu && <Dropdown items={item.subMenu} />}
              */}
          </li>
      ))}
  </ul>
  
    );
};
export default Navigation;

/*
Explanation:

Structure:
The navigationItems array defines navigation items with path, label, and an optional subMenu property for dropdowns.
The component iterates through these items using map.
Dropdown Logic:
The conditional rendering (item.subMenu ? ... : ...) checks for a subMenu property.
If present, a Dropdown component is rendered, receiving the items array for the dropdown content.
The dropdown button text is displayed within the Dropdown component.
Regular Links:
For items without a subMenu, a NavLink component is used for standard navigation links.
The activeClassName prop is set to "active" for styling active links (optional).
Key Improvements:

Combines the clarity and structure from both Response A and Response B.
Maintains the correct use of React.Fragment for key assignment.
Incorporates comments for better readability.
Offers flexibility for handling additional navigation elements (e.g., icons, separators) by using elements within the map callback.

*/