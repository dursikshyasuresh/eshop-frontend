import { ShoppingBag, Mail, Lock,User } from "lucide-react"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Checkbox } from "../components/ui/checkbox"
import { Link } from "react-router-dom"
import { Label } from "../components/ui/label"


const Register = () => {
  return (
    <div className="container flex items-center justify-center min-h-[90vh] py-8">
      <Card className="w-full max-w-md p-8">
         <div className="flex flex-col items-center text-center">
         <div className="size-11 flex items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShoppingBag />
         </div>
         <h1 className="mt-4 text-2xl font-bold text-foreground">
          Create your account
         </h1>
         <p className="mt-1 text-sm text-muted-foreground">
          Join E-Shop and start shopping today
         </p>
       </div>

       {/* form */}
       <form className="mt-8 space-y-4">
         {/* fullname */}
          <div className="space-y-1.5">
            <Label>FullName</Label>
            <div className="relative">
             <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
             <Input placeholder="john doe" className="pl-9" />
            </div>
          </div>

          {/* email */}
          <div className="space-y-1.5">
            <Label>Email</Label>
            <div className="relative">
             <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
             <Input type="email" placeholder="you@example.com" className="pl-9" />
            </div>
          </div>

           {/* password */}
          <div className="space-y-1.5">
            <Label>Password</Label>
            <div className="relative">
             <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
             <Input type="password" placeholder="********" className="pl-9" />
            </div>
          </div>

           {/* conform password */}
          <div className="space-y-1.5">
            <Label>Conform Password</Label>
            <div className="relative">
             <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
             <Input type="password" placeholder="********" className="pl-9" />
            </div>
          </div>

          {/* checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox className="rounded-full border-primary" />
            <Label className="text-muted-foreground text-sm">
              I agree to the Terms of Service and Privacy Policy
            </Label>
          </div>

          <Button className="w-full cursor-pointer" type="submit" size="lg">
            Create Account
          </Button>

          <div className="my-6 flex items-center justify-center gap-3">
             <Separator className="flex-1" />
             <span className="text-xs text-muted-foreground">
              OR CONTINUE WITH
             </span>
             <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">Google</Button>
             <Button variant="outline">Github</Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
             Don't have an account?
             <Link to="/login" className="ml-1 font-medium text-primary underline">
              Sign In
             </Link>
          </p>
       </form>
      </Card>
    </div>
  )
}
export default Register