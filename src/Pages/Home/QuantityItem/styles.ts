import { styled } from "styled-components";


export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors["base-button"]};
  border-radius: 6px;
`

export const QuantityInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.sizes.text["text-M"]};
  font-weight: 500;
  &:focus{
    outline: none;
  }
`

export const QuantityButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 0 .5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.purple};
  &:hover{
    color: ${props => props.theme.colors["purple-dark"]};
  }
`