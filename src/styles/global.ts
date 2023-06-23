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
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  p{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }

`

export const TitleLarge = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  font-weight: 800;
`

export const TitleSmall = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: ${props => props.theme.sizes.title["title-S"]};
  line-height: 130%;
  margin-bottom: .5rem;
`

export const TitleMedium = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: ${props => props.theme.sizes.title["title-M"]};
  line-height: 130%;
  margin-bottom: .5rem;
`

export const TextSmall = styled.p`
  font-size: ${props => props.theme.sizes.text["text-S"]};
`

export const Tag = styled.li`
  list-style: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.sizes.button.tag};
  line-height: 130%;
`

//font-family: 'Baloo 2', cursive;
//font-family: 'Roboto', sans-serif;*/