import { HomeContainer, IntroContainer, ListContainer, SubtitleIntro, TitleIntro } from "./styles";
import illustrationCoffee from '../../assets/illustration-coffee.png';
import { ShoppingCart, Timer, Package,  Coffee} from 'phosphor-react';
import { CoffeeItem } from "./CoffeeItem";
import { coffees } from "../../data/coffee";
import { TitleLarge } from "../../styles/global";


export function Home(){
  return(
    <HomeContainer>
      <IntroContainer>
        <div>
          <TitleIntro>Encontre o café perfeito para qualquer hora do dia</TitleIntro>
          <SubtitleIntro>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubtitleIntro>
          <ul>
            <li>
              <span className="cart"><ShoppingCart size={16} weight="fill"/></span>
              Compra simples e segura
            </li>
            <li>
              <span className="timer"><Timer size={16} weight="fill"/></span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span className="package"><Package size={16} weight="fill"/></span>
              Embalagem mantém o café intacto
            </li>
            <li>
            <span className="coffee"><Coffee size={16} weight="fill"/></span>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img src={illustrationCoffee} alt="imagem de ilustração de café em um copo" />
      </IntroContainer>
      
      <TitleLarge>Nossos Cafés</TitleLarge>
      <ListContainer>
        {coffees.map((coffee) => {
          return <CoffeeItem key={coffee.id} {...coffee} />
        })}
      </ListContainer>
    </HomeContainer>
  )
}