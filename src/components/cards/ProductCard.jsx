import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const hasDiscount =
    product.discountPrice != null && product.discountPrice < product.price;

  // calculate discount percentage
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice) / product.price) * 100,
      )
    : 0;

  return (
    <div
      className="relative group overflow-hidden rounded-xl border border-border bg-background 
    shadow-sm transition-all hover:shadow-md"
    >
      {/* product image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105 object-center"
          />
        </Link>

        {/* badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-slate-800 hover:bg-slate-800/80">New</Badge>
          )}

          {hasDiscount && (
            <Badge variant="destructive" className="text-white">
              {discountPercent}%
            </Badge>
          )}
        </div>

        {/* wishlist */}
        <button className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-background/90 shadow-sm transition-colors hover:bg-background cursor-pointer">
          <Heart className="size-4 text-muted-foreground" />
        </button>

        {/* view details */}
        <Link
          to={`/product/${product.id}`}
          className="absolute inset-x-2 bottom-2 flex translate-y-2 items-center justify-center gap-1.5 rounded-md bg-background/95 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 shadow-sm transition-all group-hover:translate-y-0"
        >
          <Eye className="size-3.5" />
          View Details
        </Link>
      </div>

      {/* product info */}
      <div className="flex flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {product.category}
        </p>

        {/* title */}
        <h3 className="truncate text-sm font-semibold text-foreground hover:text-primary">
            {product.title}
        </h3>

        {/* price */}
        <div className="flex items-center gap-2 pt-1">
           {
            hasDiscount ? (
                <>
                 <span className="text-lg font-bold text-primary">
                    ${product.discountPrice}
                 </span>

                 <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                </>
            ) : (
                <span  className="text-lg font-bold text-primary">${product.price}</span>
            )
           }
        </div>

        <Button>
            <ShoppingCart className="size-4" />
            Add to cart
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
