import { MapPin } from "phosphor-react";
import { CheckoutContainer, CheckoutContent, CheckoutDetails, CheckoutFormDetails, CheckoutOrder } from "./styles";
import { TitleXSmall } from "../../styles/global";


export function Checkout(){
  return (
    <CheckoutContainer>
      <TitleXSmall>Complete seu pedido</TitleXSmall>
      <CheckoutContent>
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
      <CheckoutOrder>
        
      </CheckoutOrder>
      </CheckoutContent>
    </CheckoutContainer>
  )
}