import { styled } from "styled-components";



export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  div{
    display: flex;
    align-items: center;
    gap: .25rem;
    padding: .5rem;
    border-radius: 6px;
    background: ${props => props.theme.colors["purple-light"]};
    .pinMap{
      color: ${props => props.theme.colors.purple};
    }
    span{
      color: ${props => props.theme.colors["purple-dark"]};
      font-size: ${props => props.theme.sizes.text["text-S"]};
    }
  }
  a{
      background: ${props => props.theme.colors["yellow-light"]};
      padding: .5rem .5rem .25rem .5rem;
      border-radius: 6px;
      position: relative;
      .cart{
      color: ${props => props.theme.colors["yellow-dark"]};
      text-decoration: none;
      }
      span{
        position: absolute;
        top: -12px;
        right: -12px;
        padding: .1rem .5rem;
        border-radius: 100px;
        font-size: ${props => props.theme.sizes.text["text-S"]};
        font-weight: 700;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors["yellow-dark"]};
        &.disabled{
          display: none;
        }
      }
    }
`