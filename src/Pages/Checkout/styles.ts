import { styled } from "styled-components";


export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
`

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CheckoutDetails = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px;
`