import {Search,ShoppingCart,Heart,User,Menu,ShoppingBag} from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import MobileMenu from "./MobileMenu"
import SearchBar from "../components/common/SearchBar"


const navLinks = [
    {label:"Home", to:"/"},
    {label:"Shop", to:"/products"},
    {label:"Audio", to:"/products?category=audio"},
    {label:"Wearables", to:"/products?category=wearables"}
]

const CART_COUNT = 1
const WISHLIST = 1
const ISLOGGEDIN = false

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
           <div className="container flex h-16 items-center gap-4">
             <MobileMenu />

              {/* brand logo */}
              <div className="flex items-center gap-2">
                 <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white shadow">
                    <ShoppingBag className="size-4" />
                 </div>
                 <span className="text-lg font-extrabold tracking-tight text-foreground">E-Shop</span>
              </div>

              {/* nav links */}
              <nav className="hidden lg:flex items-center gap-1">
                {
                    navLinks.map(item => (
                        <Link
                         to={item.to}
                         key={item.to}
                         className="px-3 py-2 test-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))
                }
              </nav>

              {/* search bar */}
              <SearchBar className="ml-auto hidden max-w-sm flex-1 md:block" />

              {/* right side */}
             <div className="ml-auto flex items-center gap-2 md:ml-2">
               <Button variant="ghost" size="icon" asChild>
                 <Link to="/carts" className="relative">
                   <ShoppingCart className="size-5" />
                   {
                    CART_COUNT > 0 && (
                        <span className="absolute -right-2 -top-2 size-4 flex justify-center items-center rounded-full bg-primary text-[10px] font-bold text-white">
                            {CART_COUNT}
                        </span>
                    )
                   }
                 </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                 <Link to="/wishlists" className="relative">
                   <Heart className="size-5" />
                   {
                    WISHLIST > 0 && (
                        <span className="absolute -right-2 -top-2 size-4 flex justify-center items-center rounded-full bg-primary text-[10px] font-bold text-white">
                            {WISHLIST}
                        </span>
                    )
                   }
                 </Link>
              </Button>

              <Button asChild className="ml-1 hidden sm:inline-flex">
                <Link to="/login">
                  Login
                </Link>
              </Button>
             </div>
           </div>
    </div>
  )
}
export default Navbar