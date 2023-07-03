import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { TitleXSmall } from "../../../styles/global";
import { CheckoutDescription, CheckoutDetailsContainer, CheckoutFormDetails, CheckoutOrderDetails, PaymentMethods } from "./styles";
import { useState } from "react";

export function CheckoutDetails(){
  const [paymentMethod, setPaymentMethod] = useState('');

  function changePayment(event: any){
    setPaymentMethod(event.target.value);
  }
  return(
    <CheckoutDetailsContainer>
        <TitleXSmall>Complete seu pedido</TitleXSmall>
        <CheckoutFormDetails>
          <CheckoutDescription>
            <span className="mapPin"><MapPin size={22}/></span>
            <div className="titleForm">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutDescription>
          <form>
            <input type="text" name="cep" className="cep" placeholder="40000-000"/>
            <input type="text" name="endereco" className="endereco" placeholder="Endereço"/>
            <input type="number" name="numero" className="numero"  placeholder="00"/>
            <input type="text" name="complemento" className="complemento" placeholder="Complemento"/>
            <input type="text" name="bairro" className="bairro" placeholder="Bairro"/>
            <input type="text" name="cidade" className="cidade"  placeholder="Cidade"/>
            <input type="text" name="estado" className="estado"  placeholder="BA"/>
          </form>
        </CheckoutFormDetails>
        <CheckoutOrderDetails>
          <CheckoutDescription>
            <span className="currencyDollar"><CurrencyDollar size={22}/></span>
            <div className="titleForm">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutDescription>
          <PaymentMethods>
            <li className={paymentMethod === 'credito' ? 'active' : ''}>
              <input type="radio" id="credito" name="order" value='credito' checked={paymentMethod === 'credito'} onChange={changePayment}/>
              <CreditCard size={16}/>
              <label htmlFor="credito">
                Cartão de crédito
              </label>
            </li>
            <li className={paymentMethod === 'debito' ? 'active' : ''}>
              <input type="radio" id="debito" name="order" value='debito' checked={paymentMethod === 'debito'} onChange={changePayment}/>
              <Bank size={16}/>
              <label htmlFor="debito">
                Cartão de débito
              </label>
            </li>
            <li className={paymentMethod === 'dinheiro' ? 'active' : ''}>
              <input type="radio" id="dinheiro" name="order" value='dinheiro' checked={paymentMethod === 'dinheiro'} onChange={changePayment}/>
              <Money size={16}/>
              <label htmlFor="dinheiro">
                Dinheiro
              </label>
            </li>
          </PaymentMethods>
        </CheckoutOrderDetails> 
      </CheckoutDetailsContainer>
  )
}