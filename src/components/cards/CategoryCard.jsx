import getImageUrl from "../../utils/getImageUrl"

const CategoryCard = ({item}) => {
  const imageUrl = getImageUrl(item.image)
  return (
    <div className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-border">
       <img 
       src={imageUrl} 
       alt={item.name} 
       className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
       />

       <div className="absolute inset-0 bg-accent-foreground/30" />
        <span className="relative z-10 mt-auto pb-4 text-sm font-semibold text-white">
            {item.name}
        </span>
   
    </div>
  )
}
export default CategoryCard