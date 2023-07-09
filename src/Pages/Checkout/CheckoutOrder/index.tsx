import { useContext } from "react";
import { TitleXSmall } from "../../../styles/global";
import { OrderCoffeeItem } from "./OrderCoffeeItem";
import { CheckoutOrderContainer, CheckoutOrderDetails, ConfirmOrder, InfoPayments } from "./styles";
import { CartContext } from "../../../context/CartContext";


export function CheckoutOrder(){
  const { cart } = useContext(CartContext)
  return(
    <CheckoutOrderContainer>
      <TitleXSmall>Cafés selecionados</TitleXSmall>
      <CheckoutOrderDetails>
        {cart.map((item) => {
          return(
            <OrderCoffeeItem {...item}/>
          )
        })}
        
        <InfoPayments>
          <div>
            <span>Total de itens</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(50)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(5)}</span>
          </div>
          <div className="emphasis">
            <span>Total</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(55)}</span>
          </div>
        </InfoPayments>
        <ConfirmOrder type="submit">Confirmar Pedido</ConfirmOrder>
      </CheckoutOrderDetails>
    </CheckoutOrderContainer>
  )
}