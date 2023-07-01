import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { Success } from "./Pages/Sucess";
import { Checkout } from "./Pages/Checkout";


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/sucess" element={<Success />}/>
      </Route>
    </Routes>
  )
}