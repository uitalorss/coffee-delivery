import { TitleXSmall } from "../../../styles/global";
import { CheckoutOrderContainer, CheckoutOrderDetails, ConfirmOrder, InfoPayments } from "./styles";


export function CheckoutOrder(){
  return(
    <CheckoutOrderContainer>
      <TitleXSmall>Cafés selecionados</TitleXSmall>
      <CheckoutOrderDetails>
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