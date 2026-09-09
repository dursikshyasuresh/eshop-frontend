import { products } from "../../data/products"
import ProductCard from "../cards/ProductCard"

const NewArrivalProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {
        products.slice(9,16).map(item => (
          <ProductCard key={item.id} product={item}  />
        ))
      }
    </div>
  )
}
export default NewArrivalProductList