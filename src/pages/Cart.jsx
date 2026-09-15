import CartCard from "../components/cards/CartCard"
import OrderSummaryCard from "../components/cards/OrderSummaryCard"
import { Card } from "../components/ui/card"
import { products } from "../data/products"

const Cart = () => {
  return (
    <div className="container py-10">
       <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Shopping Cart
       </h1>
       <p className="mt-1 text-muted-foreground text-sm">
        1 item(s) in your cart
       </p>

       <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
           {/* cart list */}
           <Card>
              {
                products.slice(0,2).map(item => (
                  <CartCard key={item.id} item={item} />
                ))
              }
           </Card>

           {/* order summary card */}
           <OrderSummaryCard />
       </div>
    </div>
  )
}
export default Cart