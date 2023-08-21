import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CheckoutDetails } from "./CheckoutDetails";
import { CheckoutOrder } from "./CheckoutOrder";
import { CheckoutContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

enum paymentMethods {
  credito = "credito",
  debito = "debito",
  dinheiro = "dinheiro"
}

const confirmOrderSchema = z.object({
  cep: z.string().nonempty("Esse campo é obrigatório").length(8, "O cep precisa ter 7 caracteres."),
  endereco: z.string().nonempty("Esse campo é obrigatório").max(100),
  numero: z.number().positive().min(1).max(1000),
  complemento: z.string().nonempty("Esse campo é obrigatório").max(30),
  bairro: z.string().nonempty("Esse campo é obrigatório").max(30),
  cidade: z.string().nonempty("Esse campo é obrigatório").max(20),
  estado: z.string().nonempty("Esse campo é obrigatório").max(2),
  meioDePagamento: z.nativeEnum(paymentMethods)
})

type confirmeOrderData = z.infer<typeof confirmOrderSchema>;


export function Checkout() {
  const confirmOrderForm = useForm<confirmeOrderData>({
    resolver: zodResolver(confirmOrderSchema)
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function confirmOrder(data: confirmeOrderData) {
    navigate("/success");
    console.log(data);
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(confirmOrder)}>
        <CheckoutDetails />
        <CheckoutOrder />
      </CheckoutContainer>
    </FormProvider>
  )
}