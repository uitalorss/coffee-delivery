import { HeaderContainer, Info } from "./styles";
import logoCoffee from '../../assets/logo-coffee.svg';
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";


export function Header(){
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="logo da cafeteria" />
      <Info>
        <div>
          <MapPin className="pinMap" size={22} weight="fill"/>
          <span>Teste, TS</span>
        </div>
        <NavLink to='/'>
          <ShoppingCart className="cart" size={22} weight="fill"/>
        </NavLink>
      </Info>
    </HeaderContainer>
  )
}