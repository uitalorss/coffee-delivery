import { styled } from "styled-components";


export const QuantityContainer = styled.div`
  display: flex;
  background: ${props => props.theme.colors["base-button"]};
  border-radius: 6px;
  align-items: center;
`

export const QuantityInput = styled.input`
  border: none;
  background: none;
  display: block;
  width: 50%;
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


export const BuyItem = styled.button`
  background: ${props => props.theme.colors["purple"]};
  padding: .5rem .5rem .25rem .5rem;
  border-radius: 6px;
  cursor: pointer;
  .cart{
  color: ${props => props.theme.colors["white"]}
  }
`