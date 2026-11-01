import RelatedProducts from "../components/RelatedProducts"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Link, useParams } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Heart,
  ShoppingCart,
  Zap,
  ShieldCheck,
  RotateCcw,
  Truck,
} from "lucide-react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import QuantitySelector from "../components/common/QuantitySelector"
import { Separator } from "@/components/ui/separator"
import { useProduct } from "../api/productServices"
import getImageUrl from "../utils/getImageUrl"
import { getDiscountInfo } from "../utils/getDiscountInfo"

const ProductDetails = () => {
  // Get product ID from URL
  const { id } = useParams()
  const [showFullDescription, setShowFullDescription] = useState(false)

  // Fetch product details using React Query
  const { data: product, isLoading, error } = useProduct(id)

  // Product image and quantity states
  // Hooks must be declared before conditional returns
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Loading state
  if (isLoading) return <p>loading....</p>

  // Error state
  if (error) {
    return <p>{error.message || "Something went wrong!"}</p>
  }

  // Product not found
  if (!product) {
    return <p>Product not found!</p>
  }

  // Get product images from API
  const images = product.images ?? []

  // Check whether product has a valid discount
  const { hasDiscount, discountPercent } = getDiscountInfo(
    product.price,
    product.discountPrice,
  )

  // Get current active image
  const activeImageUrl = images[activeImage]
    ? getImageUrl(images[activeImage])
    : ""

  return (
    <div className="container py-16">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Link to="/products">Products</Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product info */}
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Left side: Product images */}
        <div>
          <div className="max-h-[70vh] overflow-hidden rounded-xl border border-border bg-muted">
            {activeImageUrl ? (
              <img
                src={activeImageUrl}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex aspect-square items-center justify-center text-sm text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          {/* Image thumbnails */}
          <div className="mt-4 flex gap-3">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer",
                  activeImage === i ? "border-primary" : "border-transparent",
                )}
              >
                <img
                  src={getImageUrl(img)}
                  alt={`${product.title} ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side: Product information */}
        <div>
          {/* Category */}
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {product.category?.name}
          </p>

          {/* Product title */}
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {product.title}
          </h1>

          {/* New arrival badge */}
          <div className="mt-3 flex items-center gap-1.5">
            {product.isNewArrival && <Badge>New</Badge>}
          </div>

          {/* Product price */}
          <div className="mt-5 flex items-center gap-2">
            {hasDiscount ? (
              <>
                {/* Discount price */}
                <span className="text-2xl font-bold text-foreground">
                  Rs. {product.discountPrice.toLocaleString("en-IN")}
                </span>

                {/* Original price */}
                <span className="text-sm text-muted-foreground line-through">
                  Rs. {product.price.toLocaleString("en-IN")}
                </span>

                {/* Discount percentage */}
                <Badge variant="destructive" className="text-white">{discountPercent}% OFF</Badge>
              </>
            ) : (
              /* Normal price */
              <span className="text-lg font-bold text-foreground">
                Rs. {product.price.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Stock */}
          <div className="font-semibold">
            {product.stock > 0 ? (
              <p className="mt-1 text-sm text-emerald-600">
                In stock — {product.stock} available
              </p>
            ) : (
              <p className="mt-1 text-sm text-destructive">Out of stock</p>
            )}
          </div>

          {/* Product description */}
          {/* Product description */}
          <div className="mt-5">
            <p
              className={cn(
                "text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
                !showFullDescription && "line-clamp-3",
              )}
            >
              {product.description || "No description available."}
            </p>

            {product.description?.length > 150 && (
              <button
                type="button"
                onClick={() => setShowFullDescription((previous) => !previous)}
                className="mt-2 text-sm font-semibold text-primary hover:underline"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          <Separator className="my-6" />

          {/* Quantity and action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() =>
                setQuantity((q) => Math.min(product.stock, q + 1))
              }
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />

            <Button
              size="lg"
              className="flex-1 gap-2 sm:flex-none"
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="flex-1 gap-2 sm:flex-none"
              disabled={product.stock <= 0}
            >
              <Zap className="h-4 w-4" />
              Buy Now
            </Button>

            <Button size="lg" variant="outline" aria-label="Toggle wishlist">
              <Heart />
            </Button>
          </div>

          {/* Additional information */}
          <div className="mt-8 grid grid-cols-1 gap-3 rounded-lg border border-border bg-muted/30 p-4 sm:grid-cols-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4 shrink-0 text-primary" />
              Free shipping over $75
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <RotateCcw className="h-4 w-4 shrink-0 text-primary" />
              30-day returns
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              2-year warranty
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mt-16">
        <h1 className="section-title mb-6">You may also like</h1>

        <RelatedProducts productId={id} />
      </section>
    </div>
  )
}

export default ProductDetails
