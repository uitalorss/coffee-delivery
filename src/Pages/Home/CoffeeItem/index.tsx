import coffee from '../../../assets/coffees/Image.png';
import { TextSmall, TitleMedium, TitleSmall } from '../../../styles/global';
import { BuyItem } from '../BuyItem';
import { QuantityItem } from '../QuantityItem';
import { InfoPrice, ItemContainer, ItemDescription, TagItem, AddToCartContainer } from './styles';

export function CoffeeItem(){
  return(
    <ItemContainer>
      <img src={coffee} alt="ilustração do café a ser vendido" />
      <TagItem>Tradicional</TagItem>
      <TitleSmall>Expresso Tradicional</TitleSmall>
      <ItemDescription>O tradicional café feito com água quente e grãos moídos</ItemDescription>
      <InfoPrice>
        <span>
          <TextSmall>R$</TextSmall><TitleMedium>9,90</TitleMedium>
        </span>
        <AddToCartContainer>
          <QuantityItem />
          <BuyItem />
        </AddToCartContainer>
      </InfoPrice>
    </ItemContainer>
  )
}