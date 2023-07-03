import { DeleteItem } from "../../../../components/DeleteItem";
import { QuantityItem } from "../../../../components/QuantityItem";
import { OrderCoffeeCard } from "./styles";

interface ItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}


export function OrderCoffeeItem(orderItem: ItemProps){
  return(
    <OrderCoffeeCard>
      <img src={`src/assets/coffees/${orderItem.image}`} alt="" />
      <div className="details">
        <div className="itemDescription">
          <span className="description">{orderItem.name}</span>
          <span className="itemPrice">{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(orderItem.price)}</span>
        </div>
        <div className="itemActions">
          <QuantityItem amount={orderItem.amount} />
          <DeleteItem />
        </div>
      </div>
    </OrderCoffeeCard>
  )
}