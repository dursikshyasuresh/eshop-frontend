import CategoryCard from "../cards/CategoryCard"
import { useCategories } from "../../api/categoryServices"

const CategorySection = () => {
  // calling api to fetch categories
  const {data,isLoading,error} = useCategories()

  if(isLoading) return <p>loading...</p>
  if(error) return <p>Something went wrong!</p>
  console.log(data);
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {
            data?.categories.map(item => (
                <CategoryCard key={item._id} item={item} />
            ))
        }
    </div>
  )
}
export default CategorySection