import { TextSmall, TitleMedium, TitleSmall } from '../../../styles/global';
import { BuyItem } from '../BuyItem';
import { QuantityItem } from '../QuantityItem';
import { InfoPrice, ItemContainer, ItemDescription, TagItem, AddToCartContainer, TagContainer } from './styles';

interface CoffeeProps{
  nome: string;
  image: string;
  tag: string[];
  descricao: string;
  preco: number;
}

export function CoffeeItem(coffee: CoffeeProps){
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
          <TextSmall>R$</TextSmall><TitleMedium>{coffee.preco}</TitleMedium>
        </span>
        <AddToCartContainer>
          <QuantityItem />
          <BuyItem />
        </AddToCartContainer>
      </InfoPrice>
    </ItemContainer>
  )
}