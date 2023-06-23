import { styled } from "styled-components";

export const HomeContainer = styled.div`

`


export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0;
  ul{
      margin-top: 4rem;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      gap: 1.25rem;
    li{
      display: flex;
      align-items: center;
      gap: .75rem;
      span{
        color: ${props => props.theme.colors.white};
        padding: .5rem .5rem .25rem .5rem;
        border-radius: 100px;
        &.cart{
          background: ${props => props.theme.colors["yellow-dark"]};
        }
        &.timer{
          background: ${props => props.theme.colors["yellow"]};
        }
        &.package{
          background: ${props => props.theme.colors["base-text"]};
        }
        &.coffee{
          background: ${props => props.theme.colors.purple};
        }
      }
    }
  }
`

export const TitleIntro = styled.h1`
  font-size: ${props => props.theme.sizes.title["title-XL"]};
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 130%;
  width: 70%;
  margin-bottom: 1rem;
`

export const SubtitleIntro = styled.p`
  font-size: ${props => props.theme.sizes.text["text-L"]};
  width: 60%;
  line-height: 130%;
`

export const TitleSecondary = styled.h2`
  font-size: ${props => props.theme.sizes.title["title-L"]};
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 130%;
`

export const ListContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
  margin-top: 3.5rem;
`