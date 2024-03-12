import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 
`;
const Col1 = styled.div`
 
   
`;
const Col2 = styled.div`
    
`
const Home = ( {  title  } ) => {
  return (
    <div className='home'>
    {/* <img src='https://th.bing.com/th?id=OIP.XK_XsR_qiyHsQRXFnscxpwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt="company-pic"/>
   
   <article>
   <h4 className='h4'>{ title }</h4>
     <p>
      This is a fictitious company and conference 
     created by <a href='#'>Linkedin Corporation or its affiliates,</a>
     solely for the creation and development of educational 
     training materials. Any resemblance to rea; products or services
     is purely confidential. Information provided about the products
     or services on the market in a similar product or service category
     </p>
   </article> */}

      <Container className='row-container'>

        <Col1 className='first-column'>
        <h3 class="h3-1"> TRENDEST FASHION EVER </h3>

        <div class="h4-1">
            <h4> when you are in doubt,                                          
              wear a Viss Fashions Denim
            </h4>
          </div>
         
            <div>
              <button class="buy-btn"> Buy now</button>
            </div>
        </Col1>
        <Col2 className='second-column'>
            <img class="image-1" src="https://i.ibb.co/Lhchxzz/Untitled.png" alt="Untitled" border="0"/>
            
        </Col2>

      </Container>
    </div>
  )
}

export default Home
