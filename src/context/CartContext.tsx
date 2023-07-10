import { ReactNode, createContext, useState } from "react";
import { order } from "../data/order";

interface CartContextProviderType {
  cart: ItemProps[];
  deleteItemFromCart: (id: number) => void;
  addToCart: (itemId: number, itemName: string, itemImage: string, itemPrice: number, itemAmount: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode
}

interface ItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export const CartContext = createContext({} as CartContextProviderType)

export function CartContextProvider({children}: CartContextProviderProps){
  const [cart, setCart] = useState<ItemProps[]>([]);

  function deleteItemFromCart(id: number){
    setCart(cart.filter((item) => {
      return item.id !== id;
    }))
  }

  /*function incrementAmount(id: number){
    const incrementItem = cart.filter((item) => {
      if(item.id === id){
        item.amount + 1;
      }
    })
    setCart(incrementItem)
  }*/

  function addToCart(itemId: number, itemName: string, itemImage: string, itemPrice: number, itemAmount: number){
    const newOrder = {
      id: itemId,
      name: itemName,
      image: itemImage,
      price: itemPrice,
      amount: itemAmount
    }
    setCart([...cart, newOrder])
    console.log('Produto adicionado com sucesso.')
  }

  /*function decrementAmount(id: number){
    const decrementItem = cart.filter((item) => {
      if(item.id === id){
        if(item.amount > 0){
          item.amount - 1;
        }
      }
    })
    setCart(decrementItem);
  }*/

  return(
    <CartContext.Provider value={{cart, deleteItemFromCart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}