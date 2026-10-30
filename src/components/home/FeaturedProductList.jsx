import ProductCard from "../cards/ProductCard"
import { useProducts } from "../../api/productServices"

const FeaturedProductList = () => {
  const {data,isLoading,error} = useProducts({limit:5})
  if(isLoading) return <p>loading...</p>
  if(error) return <p>Something went wrong!</p>

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {
        data.products.map(item => (
          <ProductCard key={item._id} product={item}  />
        ))
      }
    </div>
  )
}
export default FeaturedProductList