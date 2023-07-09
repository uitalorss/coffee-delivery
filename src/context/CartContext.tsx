import { ReactNode, createContext, useState } from "react";
import { order } from "../data/order";

interface CartContextProviderType {
  cart: ItemProps[];
  deleteItemFromCart: (id: number) => void;
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
  const [cart, setCart] = useState<ItemProps[]>([...order])

  function deleteItemFromCart(id: number){
    const newCart = cart.filter((item) => {
      item.id !== id
    })
    setCart(newCart)
  }

  return(
    <CartContext.Provider value={{cart, deleteItemFromCart}}>
      {children}
    </CartContext.Provider>
  )
}