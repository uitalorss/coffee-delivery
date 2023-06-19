import { QuantityButton, QuantityContainer, QuantityInput } from "./styles";
import { Plus, Minus } from 'phosphor-react'


export function QuantityItem(){
  return(
    <QuantityContainer>
      <QuantityButton><Minus size={14} weight="fill"/></QuantityButton>
      <QuantityInput type="number" readOnly defaultValue={1} />
      <QuantityButton><Plus size={14} weight="fill"/></QuantityButton>
    </QuantityContainer>
  )
}