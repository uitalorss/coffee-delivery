import { styled } from "styled-components";
import { CheckoutContent } from "../styles";


export const CheckoutOrderContainer = styled(CheckoutContent)``

export const CheckoutOrderDetails = styled.div`
    padding: 2.5rem;
    background: ${props => props.theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const InfoPayments = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      color: ${props => props.theme.colors["base-text"]};
    }
    &.emphasis{
      span{
        color: ${props => props.theme.colors["base-subtitle"]};
        font-size: ${props => props.theme.sizes.text["text-L"]};
        font-weight: 700;
      }
    }
  }
`

export const ConfirmOrder = styled.button`
  max-width: 368px;
  border: none;
  outline: none;
  border-radius: 6px;
  background: ${props => props.theme.colors.yellow};
  padding: .75rem;
  color: #fff;
  font-size: ${props => props.theme.sizes.button["button-G"]};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 160%;
  cursor: pointer;
  &:hover{
    background: ${props => props.theme.colors["yellow-dark"]};
  }
`
