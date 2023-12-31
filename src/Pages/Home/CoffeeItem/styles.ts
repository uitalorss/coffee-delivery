import { styled } from "styled-components";
import { Tag, TextSmall } from "../../../styles/global";


export const ItemContainer = styled.div`
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.5rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  img{
    margin-top: -1.5rem;
    display: block;
    max-width: 120px;
  }
`

export const InfoPrice = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: .5rem;
  align-items: center;
  span{
    color: ${props => props.theme.colors["base-text"]};
    display: flex;
    align-items: center;
    gap: .25rem;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  gap: .5rem;
`

export const ItemDescription = styled(TextSmall)`
  color: ${props => props.theme.colors["base-label"]};
  text-align: center;
`

export const TagItem = styled(Tag)`
  padding: .25rem .5rem;
  margin-top: .75rem;
  margin-bottom: 1rem;
  border-radius: 100px;
  background: ${props => props.theme.colors["yellow-light"]};
  color: ${props => props.theme.colors.yellow};
  text-transform: uppercase;
`

export const TagContainer = styled.ul`
  display: flex;
  gap: .25rem;
`

export const BuyItem = styled.button`
  border: none;
  outline: none;
  background: ${props => props.theme.colors["purple-dark"]};
  padding: .5rem .5rem .25rem .5rem;
  border-radius: 6px;
  cursor: pointer;
  .cart{
  color: ${props => props.theme.colors["white"]}
  }
`