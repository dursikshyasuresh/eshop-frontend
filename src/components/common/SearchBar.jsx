import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SearchBar = ({
  value = "",
  onChange = () => {},
  placeholder = "Search products...",
  className,
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()} // stop page reload on Enter
      className={cn("relative w-full", className)}
    >
      <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-9 pr-9"
      />

      {/* clear button, only shown when there is text */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      )}
    </form>
  );
};
export default SearchBar;