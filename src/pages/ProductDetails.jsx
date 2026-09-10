import RelatedProducts from "../components/RelatedProducts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Heart,ShoppingCart,Zap,ShieldCheck,RotateCcw,Star,Truck} from "lucide-react"
import { useState } from "react";
import {Badge} from "@/components/ui/badge"

const ProductDetails = () => {
  const {id} = useParams()

  const product = products[id - 1]

  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
           <Link to="/">
             Home
           </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
           <Link to="/products">
             Products
           </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {product.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* product info */}
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* left side */}
        <div>
          <div className="max-h-[70vh] overflow-hidden rounded-xl border border-border bg-muted">
            <img
              src={product.images?.[activeImage] ?? product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {(product.images ?? [product.image]).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer",
                  activeImage === i ? "border-primary" : "border-transparent",
                )}
              >
                <img
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* right side */}
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {product.category}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {product.title}
          </h1>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="flex gap-1 items-center">
              <Star size={15} className="fill-amber-300" />
              <span className="text-sm font-semibold text-muted-foreground">
                4.5
              </span>
            </div>
            <span className="text-[11px] font-medium text-pink-700">
              ({product.reviews} reviews)
            </span>
            {product.isNew && <Badge>New</Badge>}
          </div>

          {/* stock */}
          <div className="flex items-center gap-2 mt-5">
            {product.hasDiscount !== null ? (
              <>
                {/* Discount Price */}
                <span className="text-2xl font-bold text-foreground">
                  ${product.discountPrice}
                </span>

                {/* Original Price */}
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              // Normal Price
              <span className="text-lg font-bold text-foreground">
                ${product.price}
              </span>
            )}
          </div>

          {/* stock */}
           <div className="font-semibold">
            {product.stock > 0 ? (
              <p className="mt-1 text-sm text-emerald-600">In stock — {product.stock} available</p>
            ) : (
              <p className="mt-1 text-sm text-destructive">Out of stock</p>
            )}
           </div>

          {/* product desc */}
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* <Separator className="my-6" /> */}

          <div className="flex flex-wrap items-center gap-4">
            {/* <QuantitySelector
              quantity={quantity}
              onIncrease={() =>
                setQuantity((q) => Math.min(product.stock, q + 1))
              }
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            /> */}

            <Button
              size="lg"
              className="flex-1 gap-2 sm:flex-none"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex-1 gap-2 sm:flex-none"
              disabled={product.stock === 0}
            >
              <Zap className="h-4 w-4" /> Buy Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              aria-label="Toggle wishlist"
            >
              <Heart  />
            </Button>
          </div>
           <div className="mt-8 grid grid-cols-1 gap-3 rounded-lg border border-border bg-muted/30 p-4 sm:grid-cols-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4 shrink-0 text-primary" /> Free shipping over $75
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <RotateCcw className="h-4 w-4 shrink-0 text-primary" /> 30-day returns
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" /> 2-year warranty
            </div>
          </div>
        </div>
      </div>

      {/* related product */}
      <section className="mt-8">
        <h1 className="section-title mb-6">You may also like</h1>
        <RelatedProducts />
      </section>
    </div>
  );
};
export default ProductDetails;
