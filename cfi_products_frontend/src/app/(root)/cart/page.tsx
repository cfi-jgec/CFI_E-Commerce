
"use client"

import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
    const [cart, setCart] = useState([
        {
            id: 1,
            image: "/placeholder.svg",
            name: "Cozy Blanket",
            price: 29.99,
            quantity: 1,
        },
        {
            id: 2,
            image: "/placeholder.svg",
            name: "Autumn Mug",
            price: 12.99,
            quantity: 2,
        },
        {
            id: 3,
            image: "/placeholder.svg",
            name: "Fall Fragrance Candle",
            price: 16.99,
            quantity: 1,
        },
    ])

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-[1fr_300px] gap-8">
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <h1 className="text-2xl font-bold tracking-tight">Your Cart</h1>
                        <p className="text-muted-foreground">Review the items in your cart and proceed to checkout.</p>
                    </div>
                    <div className="grid gap-6">
                        {cart.map((item) => (
                            <div key={item.id} className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="rounded-lg object-cover"
                                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                />
                                <div className="grid gap-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <Select >
                                            <SelectTrigger className="w-16">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                                                    <SelectItem key={i + 1} value={i + '0'}>
                                                        {i + 1}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Button variant="outline" size="icon"  >
                                            <TrashIcon className="h-4 w-4" />
                                            <span className="sr-only">Remove</span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between">
                                <span>Total Items</span>
                                <span className="font-semibold">{10}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Total Price</span>
                                <span className="font-semibold">${500}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Proceed to Checkout</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}