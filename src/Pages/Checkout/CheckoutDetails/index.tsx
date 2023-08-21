import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { TitleXSmall } from "../../../styles/global";
import { CheckoutDescription, CheckoutDetailsContainer, CheckoutFormDetails, CheckoutOrderDetails, CheckoutOrderInputs, PaymentItem, PaymentMethods } from "./styles";
import { useFormContext } from "react-hook-form";

export function CheckoutDetails() {
  const { register, formState } = useFormContext();

  console.log(formState.errors);

  return (
    <CheckoutDetailsContainer>
      <TitleXSmall>Complete seu pedido</TitleXSmall>
      <CheckoutFormDetails>
        <CheckoutDescription>
          <span className="mapPin"><MapPin size={22} /></span>
          <div className="titleForm">
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CheckoutDescription>
        <CheckoutOrderInputs>
          <input
            className="cep"
            placeholder="40000-000"
            {...register("cep")} />
          <input
            type="text"
            className="endereco"
            placeholder="Endereço"
            {...register("endereco")} />
          <input
            type="number"
            className="numero"
            placeholder="00"
            {...register("numero", { valueAsNumber: true })} />
          <input
            type="text"
            className="complemento"
            placeholder="Complemento"
            {...register("complemento")} />
          <input
            type="text"
            className="bairro"
            placeholder="Bairro"
            {...register("bairro")} />
          <input
            type="text"
            className="cidade"
            placeholder="Cidade"
            {...register("cidade")} />
          <input
            type="text"
            className="estado"
            placeholder="BA"
            {...register("estado")} />
        </CheckoutOrderInputs>
        <CheckoutOrderDetails>
          <CheckoutDescription>
            <span className="currencyDollar"><CurrencyDollar size={22} /></span>
            <div className="titleForm">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutDescription>
          <PaymentMethods>
            <PaymentItem>
              <input
                type="radio"
                id="credito"
                value="credito"
                {...register("meioDePagamento")} />
              <CreditCard size={16} />
              <label htmlFor="credito">
                Cartão de crédito
              </label>
            </PaymentItem>

            <PaymentItem>
              <input
                type="radio"
                id="debito"
                value="debito"
                {...register("meioDePagamento")} />
              <Bank size={16} />
              <label htmlFor="debito">
                Cartão de débito
              </label>
            </PaymentItem>

            <PaymentItem >
              <input
                type="radio"
                id="dinheiro"
                value="dinheiro"
                {...register("meioDePagamento")} />
              <Money size={16} />
              <label htmlFor="dinheiro">
                Dinheiro
              </label>
            </PaymentItem>
          </PaymentMethods>
        </CheckoutOrderDetails>
      </CheckoutFormDetails>
    </CheckoutDetailsContainer>
  )
}