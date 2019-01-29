import React, { Component } from 'react'; // importing react
import styled, { createGlobalStyle } from 'styled-components' // importing styled-components module
import TableProd from './components/Table/Table' // importing TableProd component

//Setting global styles of an app 
const GlobalStyle = createGlobalStyle` 
*, ::after, ::before {
  box-sizing: border-box;
}
  body{
    font-family: Arial;
    line-height: 1.5;
}
`
//Constructor based on Tagged Template Literals
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 15px
  margin:0 auto;
    @media (min-width: 576px){
      max-width: 540px;
    }
    @media (min-width: 576px){
      max-width: 540px;
    }
    @media (min-width: 992px){
      max-width: 960px;
    }
    @media (min-width: 1200px){
        max-width: 1140px;
    }
`;

class App extends Component {

  state = {
    

  };
  
  render() {
    return (
     <React.Fragment>
        <GlobalStyle />
          <StyledContainer>
            <Title>Products Table</Title>
            <TableProd/>
          </StyledContainer>
      </React.Fragment>
    );
  }
}

export default App;
