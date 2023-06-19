import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    background: ${props => props.theme.colors.background}
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif
  }
`

export const Heading1 = styled.p`
  color: ${props => props.theme.colors['purple']};
  font-size: ${props => props.theme.sizes.title["title-XL"]};
`

//font-family: 'Baloo 2', cursive;
//font-family: 'Roboto', sans-serif;*/