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
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";


const navLinks = [
    {label:"Home", to:"/"},
    {label:"Shop", to:"/products"},
    {label:"Audio", to:"/products?category=audio"},
    {label:"Wearables", to:"/products?category=wearables"}
]

const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-4 border-border">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <Separator />

          <nav className="flex flex-col gap-1">
             {
                navLinks.map(link => (
                    <NavLink
                     to={link.to}
                     key={link.to}
                     onClick={()=>setMobileOpen(false)}
                     className={({isActive}) => cn(
                        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground",
                        isActive && "bg-accent text-primary"
                     ) }
                    >
                        {link.label}
                    </NavLink>
                ))
             }
          </nav>

           <Separator />

           <Button size="lg">
             Login
           </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
