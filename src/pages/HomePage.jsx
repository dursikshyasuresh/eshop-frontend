import CategorySection from "../components/home/CategorySection"
import FeaturedProductList from "../components/home/FeaturedProductList"
import Hero from "../components/home/Hero"
import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import NewArrivalProductList from "../components/home/NewArrivalProductList"

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* category section */}
      <section className="container py-14">
         <p className="eyebrow">
           Browse
         </p>
         <h2 className="section-title">
            Shop By Category
         </h2>

         <div className="mt-8">
           <CategorySection />
         </div>
      </section>

      {/* featured product section */}
      <section className="container py-14">
         <p className="eyebrow">
           Handpicked
         </p>
         <h2 className="section-title">
            Featured Products
         </h2>
         <p className="section-desc">
           A section of our most loved items this month.
         </p>

         <div className="mt-8">
           <FeaturedProductList />
         </div>
      </section>

       <section className="bg-primary/90 py-16 text-primary-foreground">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Up to 40% off select audio gear
          </h2>
          <p className="max-w-lg text-primary-foreground/90">
            For a limited time, save big on headphones, earbuds, and speakers. Elevate your sound
            without breaking the bank.
          </p>
          <Button size="lg" variant="secondary" asChild className="mt-2">
            <Link to="/products?category=audio">Shop the sale</Link>
          </Button>
        </div>
      </section>

       {/* new arrivals product section */}
      <section className="container py-14">
         <p className="eyebrow">
           Just Landed
         </p>
         <h2 className="section-title">
            New Arrivals
         </h2>
         <p className="section-desc">
           The latest addition to our catalog.
         </p>

         <div className="mt-8">
           <NewArrivalProductList />
         </div>
      </section>

    </div>
  )
}
export default HomePage