import { TitleSmall } from '../../../styles/global';
import { QuantityItem } from '../../../components/QuantityItem';
import { InfoPrice, ItemContainer, ItemDescription, TagItem, AddToCartContainer, TagContainer, BuyItem } from './styles';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ShoppingCart } from 'phosphor-react';

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
  const {addToCart} = useContext(CartContext)

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
          <BuyItem onClick={() => addToCart(coffee.id, coffee.nome, coffee.image, coffee.preco, amount)}>
            <ShoppingCart className="cart" size={22} weight="fill"/>
          </BuyItem>
        </AddToCartContainer>
      </InfoPrice>
    </ItemContainer>
  )
}