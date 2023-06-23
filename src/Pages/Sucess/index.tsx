import { DetailsSucess, DetailsSucessItem, SuccessContent, SucessContainer, TitleSuccess } from "./styles";
import {MapPin, Timer, CurrencyDollar} from 'phosphor-react';
import illustrationSuccess from '../../assets/IllustrationSuccess.png'

export function Success(){
  return(
    <SucessContainer>
      <TitleSuccess>Uhu! Pedido confirmado</TitleSuccess>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
      <SuccessContent>
        <DetailsSucess>
          <DetailsSucessItem>
            <span className="mapPin"><MapPin size={16} weight="fill"/></span>
            <ul>
              <li>Entrega em Rua João Daniel Martinelli, 102</li>
              <li>Farrapos - Porto Alegre, RS</li>
            </ul>
          </DetailsSucessItem>
          <DetailsSucessItem>
            <span className="timer"><Timer size={16} weight="fill"/></span>
            <ul>
              <li>Previsão de entrega</li>
              <li>20min - 30 min</li>
            </ul>
          </DetailsSucessItem>
          <DetailsSucessItem>
            <span className="currencyDollar"><CurrencyDollar size={16} weight="fill"/></span>
            <ul>
              <li>Pagamento na entrega</li>
              <li>Cartão de crédito</li>
            </ul>
          </DetailsSucessItem>
        </DetailsSucess>
      </SuccessContent>
      <img src={illustrationSuccess} alt="" />
      </div>
    </SucessContainer>
  )
}