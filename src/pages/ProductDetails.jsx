import RelatedProducts from "../components/RelatedProducts"

const ProductDetails = () => {
  return (
    <div className="container py-16">
        {/* product info */}
        <div>Product Info</div>

        {/* related product */}
        <section className="mt-8">
          <h1 className="section-title mb-6">
            You may also like
          </h1>
          <RelatedProducts />
        </section>
    </div>
  )
}
export default ProductDetails