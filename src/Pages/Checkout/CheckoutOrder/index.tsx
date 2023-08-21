import { useContext } from "react";
import { TitleXSmall } from "../../../styles/global";
import { OrderCoffeeItem } from "./OrderCoffeeItem";
import { CheckoutOrderContainer, CheckoutOrderDetails, ConfirmOrder, InfoPayments } from "./styles";
import { CartContext } from "../../../context/CartContext";


export function CheckoutOrder() {
  const { cart } = useContext(CartContext)
  const delivery = cart.length > 0 ? 5 : 0;

  function sumItems() {
    let value = 0;
    cart.map((item) => {
      value += (item.amount * item.price)
    })
    return value;
  }

  return (
    <CheckoutOrderContainer>
      <TitleXSmall>Cafés selecionados</TitleXSmall>
      <CheckoutOrderDetails>
        {cart.map((item) => {
          return (
            <OrderCoffeeItem {...item} />
          )
        })}

        <InfoPayments>
          <div>
            <span>Total de itens</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(sumItems())}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(delivery)}</span>
          </div>
          <div className="emphasis">
            <span>Total</span>
            <span>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(sumItems() + delivery)}</span>
          </div>
        </InfoPayments>
        <ConfirmOrder disabled={cart.length === 0 ? true : false} type="submit">Confirmar Pedido</ConfirmOrder>
      </CheckoutOrderDetails>
    </CheckoutOrderContainer>
  )
}