import React from 'react';

import styled from 'styled-components';

import Navigation from './NavigationElements/Navigation';
const NavBarDiv = styled.div`
  /* Add your styling for the nav bar here */
`;

const NavBar = () => {
    

    return(
        <NavBarDiv className = "nav-bar" >
               <Navigation/>
        </NavBarDiv>
  );
    
};

export default NavBar;
