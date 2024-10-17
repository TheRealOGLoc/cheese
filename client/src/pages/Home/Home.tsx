import BrandTitle from "../../components/BrandTitle/BrandTitle"
import Cheese from "../../components/Cheese/Cheese"
import Cart from "../../components/Cart/Cart"
import { CartProvider } from "../../components/DataContext/DataContext"

// Possible Persistence Mechanism
// Switch to Next.js for better SEO performance
export default function Home() {

  // Possible Persistence Mechanism
  // Add a login feature
  return (
    <CartProvider>
      <BrandTitle />
      <Cheese />
      <Cart />
    </CartProvider>
  )
}
