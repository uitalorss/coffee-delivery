import { styled } from "styled-components";


export const OrderCoffeeCard = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  gap: 1.25rem;
  border-bottom: 1px solid ${props => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  img{
    max-width: 64px;
  }
  .details{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: .5rem .25rem;    
    .itemDescription{
      display: flex;
      justify-content: space-between;
      .itemPrice{
        font-size: ${props => props.theme.sizes.text["text-M"]};
        font-weight: 700;
        color: ${props => props.theme.colors["base-text"]};
      }
    }
    .itemActions{
      width: 170px;
      display: flex;
      gap: .5rem;
    }
  }
`