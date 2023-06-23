import { styled } from "styled-components";
import { TitleLarge } from "../../styles/global";


export const SucessContainer = styled.div`

div{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  margin-top: 5rem;
`

export const SuccessContent = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.colors.purple};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  margin-top: 2.5rem;
`

export const DetailsSucess = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`

export const DetailsSucessItem = styled.li`
  list-style: none;
  display: flex;
  gap: .75rem;
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
  ul{
    li{
      list-style: none;
    }
  }
`

export const TitleSuccess = styled(TitleLarge)`
  color: ${props => props.theme.colors["yellow-dark"]};
`