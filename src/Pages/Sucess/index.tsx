import { OrderInfo, OrderInfoItem, SuccessContent, SucessContainer, TitleSuccess } from "./styles";
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import illustrationSuccess from '../../assets/IllustrationSuccess.png'

export function Success() {
  return (
    <SucessContainer>
      <div className="introPageSuccess">
        <TitleSuccess>Uhu! Pedido confirmado</TitleSuccess>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessContent>
        <OrderInfo>
          <OrderInfoItem>
            <span className="mapPin"><MapPin size={16} weight="fill" /></span>
            <div>
              <article>Entrega em Rua João Daniel Martinelli, 102</article>
              <article>Farrapos - Porto Alegre, RS</article>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <span className="timer"><Timer size={16} weight="fill" /></span>
            <div>
              <article>Previsão de entrega</article>
              <strong>20min - 30 min</strong>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <span className="currencyDollar"><CurrencyDollar size={16} weight="fill" /></span>
            <div>
              <article>Pagamento na entrega</article>
              <strong>Cartão de crédito</strong>
            </div>
          </OrderInfoItem>
        </OrderInfo>
        <img src={illustrationSuccess} alt="" />
      </SuccessContent>
    </SucessContainer >
  )
}