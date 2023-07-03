import { TitleSmall } from '../../../styles/global';
import { BuyItem } from '../BuyItem';
import { QuantityItem } from '../../../components/QuantityItem';
import { InfoPrice, ItemContainer, ItemDescription, TagItem, AddToCartContainer, TagContainer } from './styles';
import { useState } from 'react';

interface CoffeeProps{
  id: number;
  nome: string;
  image: string;
  tag: string[];
  descricao: string;
  preco: number;
}

export function CoffeeItem(coffee: CoffeeProps){
  const [amount, setAmount] = useState(0);

  function decrementAmount(){
    if(amount > 0){
      setAmount(amount - 1);
    }
  }

  function incrementAmount(){
    setAmount(amount + 1);
  }

  return(
    <ItemContainer>
      <img src={`src/assets/coffees/${coffee.image}`} alt="ilustração do café a ser vendido" />
      <TagContainer>
      {coffee.tag.map((item)=> {
          return <TagItem>{item}</TagItem>
        })}
      </TagContainer>
      <TitleSmall>{coffee.nome}</TitleSmall>
      <ItemDescription>{coffee.descricao}</ItemDescription>
      <InfoPrice>
        <span>
            <TitleSmall>{new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(coffee.preco)}
          </TitleSmall>
        </span>
        <AddToCartContainer>
          <QuantityItem amount={amount} incrementAmount={incrementAmount} decrementAmount={decrementAmount} />
          <BuyItem />
        </AddToCartContainer>
      </InfoPrice>
    </ItemContainer>
  )
}