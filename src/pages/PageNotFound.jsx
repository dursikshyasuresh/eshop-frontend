import { CompassIcon, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const navigate = useNavigate()
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <CompassIcon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-foreground">404</h1>
      <p className="mt-2 text-lg font-semibold text-foreground">Page not found</p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={()=>navigate("/")} className="mt-8 gap-1.5">
          <Home className="h-4 w-4" /> Back to Home
      </Button>
    </div>
  )
}
