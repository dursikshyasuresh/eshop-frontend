import { products } from "../data/products"
import ProductCard from "./cards/ProductCard"

const RelatedProducts = () => {
  return (
   <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
         {
           products.slice(0,5).map(item => (
             <ProductCard key={item.id} product={item}  />
           ))
         }
       </div>
  )
}
export default RelatedProducts