import { styled } from "styled-components";
import { TitleLarge } from "../../styles/global";


export const SucessContainer = styled.div`
  margin-top: 5rem;
  .introPageSuccess{
    margin-bottom: 2.5rem;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  gap: 0 2rem;
  align-items: center;
  justify-content: space-between;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  width: 100%;
  max-width: 680px;
  border: 2px solid ${props => props.theme.colors.purple};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  margin-top: 2.5rem;
`

export const OrderInfoItem = styled.div`
display: flex;
gap: 0 1rem;
span{
  display: flex;
  align-items: center;
  padding: .375rem .875rem;
  border-radius: 100px;
    &.mapPin{
      background: ${props => props.theme.colors.purple};
      color: ${props => props.theme.colors.white};
    }
    &.timer{
      background: ${props => props.theme.colors.yellow};
      color: ${props => props.theme.colors.white}
    }
    &.currencyDollar{
      background: ${props => props.theme.colors["yellow-dark"]};
      color: ${props => props.theme.colors.white}
    }
  }
  div{
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }
`

export const TitleSuccess = styled(TitleLarge)`
  color: ${props => props.theme.colors["yellow-dark"]};
`