import { Trash } from "phosphor-react";
import { ButtonDeleteItem } from "./styles";


export function DeleteItem(){
  return(
    <ButtonDeleteItem>
      <Trash size={16}/>
      <span>Remover</span>
    </ButtonDeleteItem>
  )
}