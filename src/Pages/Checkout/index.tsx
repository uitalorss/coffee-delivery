import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { CheckoutContainer, CheckoutContent, CheckoutDetails, CheckoutDetailsContainer, CheckoutFormDetails, CheckoutOrder, PaymentMethods } from "./styles";
import { TitleXSmall } from "../../styles/global";


export function Checkout(){
  return (
    <CheckoutContainer>
      <CheckoutDetailsContainer>
        <TitleXSmall>Complete seu pedido</TitleXSmall>
        <CheckoutFormDetails>
          <CheckoutDetails>
            <span className="mapPin"><MapPin size={22}/></span>
            <div className="titleForm">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutDetails>
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
        <CheckoutFormDetails>
          <CheckoutDetails>
            <span className="CurrencyDollar"><CurrencyDollar size={22}/></span>
            <div className="titleForm">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutDetails>
          <PaymentMethods>
            <li>
              <input type="radio" id="credito" name="order"/>
              <label htmlFor="credito">
                <CreditCard size={16}/>
                Cartão de crédito
              </label>
            </li>
            <li>
              <input type="radio" id="Debito" name="order"/>
              <label htmlFor="Debito">
                <Bank size={16}/>
                Cartão de Débito
              </label>
            </li>
            <li>
              <input type="radio" id="dinheiro" name="order"/>
              <label htmlFor="dinheiro">
                <Money size={16}/>
                Dinheiro
              </label>
            </li>
          </PaymentMethods>

        </CheckoutFormDetails> 
      </CheckoutDetailsContainer>
    </CheckoutContainer>
  )
}