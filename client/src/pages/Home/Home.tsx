import BrandTitle from "../../components/BrandTitle/BrandTitle"
import Cheese from "../../components/Cheese/Cheese"
import Cart from "../../components/Cart/Cart"
import { CartProvider } from "../../components/DataContext/DataContext"

export default function Home() {

  return (
    <CartProvider>
      <BrandTitle />
      <Cheese />
      <Cart />
    </CartProvider>
  )
}
