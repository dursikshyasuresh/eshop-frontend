import {Routes,Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Wishlists from "./pages/Wishlists"
import PageNotFound from "./pages/PageNotFound"
import Checkout from "./pages/Checkout"

const App = () => {
  return (
    <div>
      <Routes>
         {/* main layout */}
         <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/wishlists" element={<Wishlists />} />
            <Route path="/checkout" element={<Checkout />} />
         </Route>

         {/* page not found */}
         <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
export default App