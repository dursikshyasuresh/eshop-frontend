import { Checkbox } from "@/components/ui/checkbox"
import { categories, priceRanges } from "../data/products"
import { Label } from "./ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const ProductFilters = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Filters</h3>
        <Button variant="ghost" size="sm">
          Clear all
        </Button>
      </div>
      <Separator />

      {/* category filters */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Categories</h4>

        {categories.map((cat) => (
          <div key={cat.id} className="flex mb-2 items-center gap-2">
            <Checkbox className="rounded-full ring ring-primary" />
            <Label className="text-muted-foreground text-sm">{cat.name}</Label>
          </div>
        ))}
      </div>

      {/* category filters */}
      <div>
        <h4 className="mb-3 font-medium text-gray-900">Price</h4>

        {priceRanges.map((price) => (
          <div key={price.id} className="flex mb-2 items-center gap-2">
            <Checkbox className="rounded-full ring ring-primary" />
            <Label className="text-muted-foreground text-sm">
              {price.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductFilters
