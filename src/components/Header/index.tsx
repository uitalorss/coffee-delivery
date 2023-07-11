import { HeaderContainer, Info } from "./styles";
import logoCoffee from '../../assets/logo-coffee.svg';
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

interface Location {
  city?: string;
  region_code?: string;
  country?: string;
}


export function Header(){
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const {cart} = useContext(CartContext);

  useEffect(() => {
    geoLocation()
  })

  const geoLocation = async () => {
    const location = await axios.get('https://ipapi.co/json')
    setCurrentLocation(location.data);
  }
  
  function isCartEmpty(){
    return cart.length === 0 ? true : false;
  }

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logoCoffee} alt="logo da cafeteria" />
      </NavLink>
      
      <Info>
        <div>
          <MapPin className="pinMap" size={22} weight="fill"/>
          <span>{currentLocation?.city}, {currentLocation?.region_code}</span>
        </div>
        <NavLink to='/checkout'>
          <span className={isCartEmpty() ? "disabled" : ""}>{cart.length}</span>
          <ShoppingCart className="cart" size={22} weight="fill"/>
        </NavLink>
      </Info>
    </HeaderContainer>
  )
}