import { useState } from "react";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Lock,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Example cart products
  const products = [
    {
      id: 1,
      title: "Premium Cotton T-Shirt",
      image: "https://placehold.co/100x100",
      price: 39.99,
      quantity: 1,
    },
    {
      id: 2,
      title: "Classic Running Shoes",
      image: "https://placehold.co/100x100",
      price: 89.99,
      quantity: 1,
    },
  ];

  // Calculate subtotal from cart products
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shipping = deliveryMethod === "express" ? 14.99 : 5.99;

  const discount = 10;

  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Back to Cart */}
        <Link
          to="/cart"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to cart
        </Link>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Checkout
          </h1>

          <p className="mt-2 text-muted-foreground">
            Complete your order securely and easily.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-semibold">1</span>
                  </div>

                  <div>
                    <CardTitle className="text-lg">
                      Contact information
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                      We'll use this to send your order updates.
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <CardTitle className="text-lg">
                      Shipping address
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Name */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First name
                    </Label>

                    <Input
                      id="firstName"
                      placeholder="John"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last name
                    </Label>

                    <Input
                      id="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">
                    Street address
                  </Label>

                  <Input
                    id="address"
                    placeholder="123 Main Street"
                  />
                </div>

                {/* City / State */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>

                    <Input
                      id="city"
                      placeholder="Kathmandu"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">
                      State / Province
                    </Label>

                    <Input
                      id="state"
                      placeholder="Bagmati"
                    />
                  </div>
                </div>

                {/* Country / ZIP */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="country">
                      Country
                    </Label>

                    <Input
                      id="country"
                      placeholder="Nepal"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode">
                      Postal code
                    </Label>

                    <Input
                      id="postalCode"
                      placeholder="44600"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone number
                  </Label>

                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Delivery Method */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Truck className="h-4 w-4" />
                  </div>

                  <div>
                    <CardTitle className="text-lg">
                      Delivery method
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                      Choose how you'd like to receive your order.
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Standard */}
                <label
                  className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                    deliveryMethod === "standard"
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={deliveryMethod === "standard"}
                      onChange={(e) =>
                        setDeliveryMethod(e.target.value)
                      }
                      className="h-4 w-4 accent-primary"
                    />

                    <div>
                      <p className="font-medium">
                        Standard Delivery
                      </p>

                      <p className="text-sm text-muted-foreground">
                        3–5 business days
                      </p>
                    </div>
                  </div>

                  <span className="font-medium">
                    $5.99
                  </span>
                </label>

                {/* Express */}
                <label
                  className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                    deliveryMethod === "express"
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="express"
                      checked={deliveryMethod === "express"}
                      onChange={(e) =>
                        setDeliveryMethod(e.target.value)
                      }
                      className="h-4 w-4 accent-primary"
                    />

                    <div>
                      <p className="font-medium">
                        Express Delivery
                      </p>

                      <p className="text-sm text-muted-foreground">
                        1–2 business days
                      </p>
                    </div>
                  </div>

                  <span className="font-medium">
                    $14.99
                  </span>
                </label>
              </CardContent>
            </Card>

            {/* Payment */}
           {/* Payment */}
<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        <CreditCard className="h-4 w-4" />
      </div>

      <div>
        <CardTitle className="text-lg">
          Payment method
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Choose your preferred payment method.
        </p>
      </div>
    </div>
  </CardHeader>

  <CardContent className="space-y-5">

    {/* Payment Options */}
    <div className="grid gap-3 sm:grid-cols-2">

      {/* Credit / Debit Card */}
      <button
        type="button"
        onClick={() => setPaymentMethod("card")}
        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
          paymentMethod === "card"
            ? "border-primary bg-primary/5 ring-1 ring-primary"
            : "hover:bg-muted/50"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <CreditCard className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <p className="font-medium">
            Credit / Debit Card
          </p>

          <p className="text-xs text-muted-foreground">
            Visa, Mastercard
          </p>
        </div>

        {paymentMethod === "card" && (
          <Check className="h-5 w-5 text-primary" />
        )}
      </button>

      {/* eSewa */}
      <button
        type="button"
        onClick={() => setPaymentMethod("esewa")}
        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
          paymentMethod === "esewa"
            ? "border-primary bg-primary/5 ring-1 ring-primary"
            : "hover:bg-muted/50"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
          <span className="text-sm font-bold text-green-700">
            eS
          </span>
        </div>

        <div className="flex-1">
          <p className="font-medium">
            eSewa
          </p>

          <p className="text-xs text-muted-foreground">
            Pay with eSewa
          </p>
        </div>

        {paymentMethod === "esewa" && (
          <Check className="h-5 w-5 text-primary" />
        )}
      </button>

      {/* Khalti */}
      <button
        type="button"
        onClick={() => setPaymentMethod("khalti")}
        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
          paymentMethod === "khalti"
            ? "border-primary bg-primary/5 ring-1 ring-primary"
            : "hover:bg-muted/50"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
          <span className="text-sm font-bold text-purple-700">
            K
          </span>
        </div>

        <div className="flex-1">
          <p className="font-medium">
            Khalti
          </p>

          <p className="text-xs text-muted-foreground">
            Pay with Khalti
          </p>
        </div>

        {paymentMethod === "khalti" && (
          <Check className="h-5 w-5 text-primary" />
        )}
      </button>

      {/* Cash on Delivery */}
      <button
        type="button"
        onClick={() => setPaymentMethod("cod")}
        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
          paymentMethod === "cod"
            ? "border-primary bg-primary/5 ring-1 ring-primary"
            : "hover:bg-muted/50"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <Package className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <p className="font-medium">
            Cash on Delivery
          </p>

          <p className="text-xs text-muted-foreground">
            Pay when your order arrives
          </p>
        </div>

        {paymentMethod === "cod" && (
          <Check className="h-5 w-5 text-primary" />
        )}
      </button>

    </div>

    {/* Card Payment */}
    {paymentMethod === "card" && (
      <div className="space-y-5 rounded-xl border bg-muted/20 p-5">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">
            Card number
          </Label>

          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="expiry">
              Expiration date
            </Label>

            <Input
              id="expiry"
              placeholder="MM / YY"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cvc">
              CVC
            </Label>

            <Input
              id="cvc"
              placeholder="123"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardName">
            Name on card
          </Label>

          <Input
            id="cardName"
            placeholder="John Doe"
          />
        </div>
      </div>
    )}

    {/* eSewa Payment */}
    {paymentMethod === "esewa" && (
      <div className="rounded-xl border bg-muted/20 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <span className="font-bold text-green-700">
              eS
            </span>
          </div>

          <div>
            <p className="font-semibold">
              Pay with eSewa
            </p>

            <p className="text-sm text-muted-foreground">
              You will be redirected to eSewa to
              complete your payment securely.
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Khalti Payment */}
    {paymentMethod === "khalti" && (
      <div className="rounded-xl border bg-muted/20 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
            <span className="font-bold text-purple-700">
              K
            </span>
          </div>

          <div>
            <p className="font-semibold">
              Pay with Khalti
            </p>

            <p className="text-sm text-muted-foreground">
              You will be redirected to Khalti to
              complete your payment securely.
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Cash on Delivery */}
    {paymentMethod === "cod" && (
      <div className="rounded-xl border bg-muted/20 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Package className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold">
              Cash on Delivery
            </p>

            <p className="text-sm text-muted-foreground">
              Pay in cash when your order is delivered.
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Security */}
    <div className="flex gap-3 rounded-lg bg-muted/50 p-4">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

      <div>
        <p className="text-sm font-medium">
          Secure payment
        </p>

        <p className="text-xs text-muted-foreground">
          Your payment information is securely
          processed.
        </p>
      </div>
    </div>

  </CardContent>
</Card>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Order summary</CardTitle>

                  <span className="text-sm text-muted-foreground">
                    {products.length} items
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Products */}
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-16 w-16 rounded-lg border object-cover"
                        />

                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                          {product.quantity}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-medium">
                          {product.title}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          Qty: {product.quantity}
                        </p>
                      </div>

                      <p className="text-sm font-medium">
                        $
                        {(
                          product.price *
                          product.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Promo Code */}
                <div className="space-y-3">
                  <Label htmlFor="promo">
                    Promo code
                  </Label>

                  <div className="flex gap-2">
                    <Input
                      id="promo"
                      placeholder="Enter code"
                    />

                    <Button variant="outline">
                      Apply
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Subtotal
                    </span>

                    <span>
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Shipping
                    </span>

                    <span>
                      ${shipping.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Discount
                    </span>

                    <span className="text-green-600">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Separator />

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    Total
                  </span>

                  <span className="text-2xl font-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Place Order */}
                <Button
                  size="lg"
                  className="w-full"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Place Order
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By placing your order, you agree to our
                  terms and conditions.
                </p>

                {/* Benefits */}
                <div className="space-y-3 rounded-lg bg-muted/40 p-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />

                    <span className="text-xs">
                      Secure checkout
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />

                    <span className="text-xs">
                      Easy returns
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />

                    <span className="text-xs">
                      Order tracking
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}