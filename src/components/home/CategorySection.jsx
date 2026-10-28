import { useQuery } from "@tanstack/react-query"
import CategoryCard from "../cards/CategoryCard"
import axios from "axios"

const CategorySection = () => {
  // calling api to fetch categories
  const {data,isLoading,error} = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/categories")
      return response.data
    }
  })

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