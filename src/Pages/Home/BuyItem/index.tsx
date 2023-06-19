import { ShoppingCart } from "phosphor-react";
import { BuyItemContainer } from "./styles";


export function BuyItem(){
  return(
    <BuyItemContainer>
      <ShoppingCart className="cart" size={22} weight="fill"/>
    </BuyItemContainer>
  )
}