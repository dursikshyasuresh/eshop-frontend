import { useRelatedProducts } from "../api/productServices"
import ProductCard from "./cards/ProductCard"

const RelatedProducts = ({productId}) => {
  const {data,isLoading,error} = useRelatedProducts(productId)
  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error.message || 'Something went wrong!'}</p>
  if(!data || data.length === 0) return <p>Product Not found!</p>

  return (
   <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
         {
           data.map(item => (
             <ProductCard key={item._id} product={item}  />
           ))
         }
       </div>
  )
}
export default RelatedProducts