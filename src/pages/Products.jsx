import SearchBar from "../components/common/SearchBar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/cards/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductFilters from "../components/ProductFilters";

const Products = () => {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          All products
        </h1>
        <p className="mt-1 text-muted-foreground">10 products availabe</p>
      </div>

      <div
        className="grid gap-8 
       lg:grid-cols-[240px_1fr]"
      >
        <aside className="hidden lg:block">
          <ProductFilters />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchBar className="sm:max-w-xs" />

            <div className="flex items-center gap-2 sm:ml-auto">
              {/* filter sheet */}
              <Sheet>
                <SheetTrigger>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 lg:hidden"
                  >
                    <SlidersHorizontal /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="border-border overflow-y-auto w-80"
                >
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <ProductFilters />
                </SheetContent>
              </Sheet>

              {/* filter dropdown menu */}
              <Select>
                <SelectTrigger className="w-42.5">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">
                    Featured
                  </SelectItem>
                  <SelectItem value="newest">
                    Newest
                  </SelectItem>
                  <SelectItem value="price-low">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high">
                    Price: High to Low
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 8).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
