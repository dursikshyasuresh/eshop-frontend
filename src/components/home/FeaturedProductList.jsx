import { products } from "../../data/products"
import ProductCard from "../cards/ProductCard"

const FeaturedProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {
        products.slice(0,8).map(item => (
          <ProductCard key={item.id} product={item}  />
        ))
      }
    </div>
  )
}
export default FeaturedProductList