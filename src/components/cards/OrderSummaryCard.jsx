import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { ArrowLeft, Tag } from "lucide-react"
import { Link } from "react-router-dom"
import { Card } from "../ui/card"

const OrderSummaryCard = () => {
    const discountApplied = false
  return (
    <div className="border border-border rounded-xl shadow-sm p-4">
      <h2 className="font-semibold text-foreground mb-4">Order Summary</h2>

      <form className="mt-4 flex gap-2 items-center">
        <Input placeholder="Promo code (try SAVE10)" />
        <Button type="submit" variant="secondary" className="shrink-0 gap-1.5">
          <Tag className="h-4 w-4" /> Apply
        </Button>
      </form>

       <Separator className="my-5" />

        <div className="space-y-2.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground">$200</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-foreground">FREE</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount (SAVE10)</span>
                  <span>-$10</span>
                </div>
              )}
            </div>

            <Separator className="my-5" />

            <div className="flex justify-between text-base font-bold text-foreground">
              <span>Total</span>
              <span>$1000</span>
            </div>

            <Button asChild size="lg" className="mt-6 w-full">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button asChild variant="ghost" className="mt-2 w-full gap-1.5">
              <Link to="/products" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Continue Shopping
              </Link>
            </Button>
    </div>
  )
}
export default OrderSummaryCard