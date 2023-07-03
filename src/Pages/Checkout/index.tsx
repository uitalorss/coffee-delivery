import { CheckoutDetails } from "./CheckoutDetails";
import { CheckoutOrder } from "./CheckoutOrder";
import { CheckoutContainer } from "./styles";
export function Checkout(){
  return (
    <CheckoutContainer>
      <CheckoutDetails />
      <CheckoutOrder />
    </CheckoutContainer>
  )
}