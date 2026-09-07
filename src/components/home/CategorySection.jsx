import { categories } from "../../data/products"
import CategoryCard from "../cards/CategoryCard"

const CategorySection = () => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {
            categories.map(item => (
                <CategoryCard key={item.id} item={item} />
            ))
        }
    </div>
  )
}
export default CategorySection