import { styled } from "styled-components";


export const ButtonDeleteItem = styled.div`
  background: ${props => props.theme.colors["base-button"]};
  padding: .5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: .25rem;
  svg{
    color: ${props => props.theme.colors.purple};
  }
  span{
    font-size: ${props => props.theme.sizes.button["button-M"]};
    text-transform: uppercase;
  }
`