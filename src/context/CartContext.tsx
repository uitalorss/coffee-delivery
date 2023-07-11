import { ReactNode, createContext, useState } from "react";

interface CartContextProviderType {
  cart: ItemProps[];
  deleteItemFromCart: (id: number) => void;
  addToCart: (itemId: number, itemName: string, itemImage: string, itemPrice: number, itemAmount: number) => void;
  handleIncrementCart: (id: number) => void;
  handleDecrementCart: (id: number) => void;
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

  function handleDecrementCart(id: number){
    setCart(cart.filter((item) => {
      if(item.id === id){
        if(item.amount > 0){
          return item.amount = item.amount - 1;
        }
      }
    }))
  }

  function handleIncrementCart(id: number){
    setCart(cart.filter((item) => {
      if(item.id === id){
        return item.amount = item.amount + 1;
      }
    }))
  }

  function addToCart(itemId: number, itemName: string, itemImage: string, itemPrice: number, itemAmount: number){
    const newOrder = {
      id: itemId,
      name: itemName,
      image: itemImage,
      price: itemPrice,
      amount: itemAmount
    }
    setCart([...cart, newOrder])
    alert('Produto adicionado com sucesso.')
  }

  return(
    <CartContext.Provider value={{cart, deleteItemFromCart, addToCart, handleIncrementCart, handleDecrementCart}}>
      {children}
    </CartContext.Provider>
  )
}