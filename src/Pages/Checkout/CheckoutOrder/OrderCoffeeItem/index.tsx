import { useContext } from "react";
import { QuantityItem } from "../../../../components/QuantityItem";
import { ButtonDeleteItem, OrderCoffeeCard } from "./styles";
import { CartContext } from "../../../../context/CartContext";
import { Trash } from "phosphor-react";

interface ItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export function OrderCoffeeItem(orderItem: ItemProps){
  const {deleteItemFromCart} = useContext(CartContext)
  return(
    <OrderCoffeeCard>
      <img src={`src/assets/coffees/${orderItem.image}`} alt="" />
      <div className="details">
        <div className="itemDescription">
          <span className="description">{orderItem.name}</span>
          <span className="itemPrice">{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(orderItem.price * orderItem.amount)}</span>
        </div>
        <div className="itemActions">
          <QuantityItem amount={orderItem.amount} />
          <ButtonDeleteItem type="button" onClick={() => deleteItemFromCart(orderItem.id)}>
            <Trash size={16}/>
            <span>Remover</span>
          </ButtonDeleteItem>
        </div>
      </div>
    </OrderCoffeeCard>
  )
}