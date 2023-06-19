import { styled } from "styled-components";


export const BuyItemContainer = styled.button`
  border: none;
  outline: none;
  background: ${props => props.theme.colors["purple-dark"]};
  padding: .5rem .5rem .25rem .5rem;
  border-radius: 6px;
  .cart{
  color: ${props => props.theme.colors["white"]}
  }
`