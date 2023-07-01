import { styled } from "styled-components";


export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const CheckoutFormDetails = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px;
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

export const CheckoutDetails = styled.div`
    display: flex;
    gap: 0 .5rem;
    margin-bottom: 2rem;
    span{
      svg {
        color: ${props => props.theme.colors["yellow-dark"]}
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

export const CheckoutOrder = styled.div``