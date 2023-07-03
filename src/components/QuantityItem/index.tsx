import { QuantityButton, QuantityContainer } from "./styles";
import { Plus, Minus } from 'phosphor-react'

interface QuantityItemProps {
  amount: number;
  incrementAmount?: () => void;
  decrementAmount?: () => void;
}

export function QuantityItem({amount, incrementAmount, decrementAmount}: QuantityItemProps){
  return(
    <QuantityContainer>
      <QuantityButton onClick={decrementAmount}><Minus size={14} weight="fill"/></QuantityButton>
      <input value={amount} type="number" readOnly />
      <QuantityButton onClick={incrementAmount}><Plus size={14} weight="fill"/></QuantityButton>
    </QuantityContainer>
  )
}