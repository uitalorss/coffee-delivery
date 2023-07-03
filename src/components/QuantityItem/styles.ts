import { styled } from "styled-components";


export const QuantityContainer = styled.div`
  width: 72px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${props => props.theme.colors["base-button"]};
  padding: .5rem;
  input{
    border: none;
    background: none;
    width: 100%;
    font-size: ${props => props.theme.sizes.text["text-M"]};
    font-weight: 500;
    text-align: center;
    &:focus{
      outline: none;
    }

  }
`

export const QuantityButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.purple};
  &:hover{
    color: ${props => props.theme.colors["purple-dark"]};
  }
`