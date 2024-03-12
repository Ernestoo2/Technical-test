import './App.css';
import styled from "styled-components";
import React from 'react';

import RouTes from './Component/RouTes';
import Home from './Component/NavElement/Home';
const Header = styled.div`
    
`;
const Logo = styled.div`

`

const SignupLogin =styled.div`

`

const Footer = styled.div`
  background-color:rgb(0, 255, 42) ;
`



function App() {
  return (
    <div className="App">
      <Header className='header'>
        <Logo className="logo-container"> 
          <h2 class="logo"> Viss Fashion</h2>
         </Logo>
        
       <RouTes/>

        <SignupLogin className="signup-login">
        <button class="signup-btn">Sign Up</button>
        <button class="login-btn">Log In</button>
        </SignupLogin>
      </Header>
      
        <Home />
      
      

      <Footer className='footer'>footer</Footer>
    </div>
  );
}

export default App;
