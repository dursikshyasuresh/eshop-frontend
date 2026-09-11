import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SearchBar = ({
    placeholder="Search products...",
    className
}) => {
  return (
    <form className={cn(
        "relative w-full",
        className
    )}>
      <Search className="pointer-events-none absolute left-3 top-3 size-4  text-muted-foreground" />
      <Input placeholder={placeholder} className="pl-9" />
    </form>
  );
};
export default SearchBar;
