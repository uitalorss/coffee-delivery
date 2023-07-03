import { styled } from "styled-components"
import { CheckoutContent } from "../styles"

export const CheckoutDetailsContainer = styled(CheckoutContent)``

export const CheckoutDetails = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px;
`

export const CheckoutFormDetails = styled(CheckoutDetails)`
  form{
    display: grid;
    gap: 1rem .75rem;
    grid-template-areas:
      'cep cep cep'
      'endereco endereco endereco'
      'numero complemento complemento'
      'bairro cidade estado';
    input{
      padding: .75rem;
      border: 1px solid ${props => props.theme.colors["base-button"]};
      background: ${props => props.theme.colors["base-input"]};
      border-radius: 4px;
      color: ${props => props.theme.colors["base-text"]};
      font-size: ${props => props.theme.sizes.text["text-S"]};
      &::placeholder{
        color: ${props => props.theme.colors["base-label"]};
      }
      &:focus{
        border: 1px solid ${props => props.theme.colors["yellow-dark"]};
      }
      &:active{
        border: 1px solid ${props => props.theme.colors["yellow-dark"]};
      }
    }
    .cep{
      grid-area: cep;
      max-width: 180px;
    }
    .endereco{
      grid-area: endereco;
    }
    .numero{
      grid-area: numero;
    }
    .complemento{
      grid-area: complemento;
    }
    .bairro{
      grid-area: bairro;
    }
    .cidade{
      grid-area: cidade;
    }
    .estado{
      grid-area: estado;
      max-width: 70px;
    }
  }
`

export const CheckoutOrderDetails = styled(CheckoutDetails)``

export const CheckoutDescription = styled.div`
    display: flex;
    gap: 0 .5rem;
    margin-bottom: 2rem;
    span{
      &.mapPin{
        svg{
          color: ${props => props.theme.colors["yellow-dark"]}
        }
      }
      &.currencyDollar{
        svg{
          color: ${props => props.theme.colors["purple"]}
        }
      }
    }
    .titleForm{
      display: flex;
      flex-direction: column;
      h3{
        font-size: ${props => props.theme.sizes.text["text-M"]};
        font-weight: 400;
        color: ${props => props.theme.colors["base-subtitle"]};
        line-height: 130%;
      }
      p{
        font-size: ${props => props.theme.sizes.text["text-S"]};
        color: ${props => props.theme.colors["base-text"]};
      }

    }
`

export const PaymentMethods = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  li{
    width: 178px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem;
    border-radius: 6px;
    background: ${props => props.theme.colors["base-button"]};
    border: 1px solid ${props => props.theme.colors["base-button"]};
    input{
      display: none;
    }
    label{
      font-size: ${props => props.theme.sizes.button["button-M"]};
      line-height: 160%;
      text-transform: uppercase;
    }
    svg{
      color: ${props => props.theme.colors["purple"]};
    }
    &:hover{
      background: ${props => props.theme.colors["base-hover"]};
    }
    &.active{
      background: ${props => props.theme.colors["purple-light"]};
      border: 1px solid ${props => props.theme.colors["purple"]};
    }
  }
`