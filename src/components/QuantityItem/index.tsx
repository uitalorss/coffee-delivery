import { useState } from "react";
import { QuantityButton, QuantityContainer } from "./styles";
import { Plus, Minus } from 'phosphor-react'


export function QuantityItem(){
  const [amount, setAmount] = useState(0);

  function decrementAmount(){
    if(amount > 0){
      return setAmount(amount - 1);
    }
  }

  return(
    <QuantityContainer>
      <QuantityButton onClick={decrementAmount}><Minus size={14} weight="fill"/></QuantityButton>
      <input value={amount} type="number" readOnly />
      <QuantityButton onClick={()=> setAmount(amount + 1)}><Plus size={14} weight="fill"/></QuantityButton>
    </QuantityContainer>
  )
}