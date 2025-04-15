"use client"

import { useState } from "react"
import { Plus, Gift, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for wishlist items
const WISHLIST_DATA = {
    birthday: {
        name: "Birthday",
        icon: <Gift className="h-5 w-5" />,
        items: [
            { id: 1, name: "Wireless Headphones", price: "$199", image: "/placeholder.svg?height=80&width=80" },
            { id: 2, name: "Smart Watch", price: "$299", image: "/placeholder.svg?height=80&width=80" },
            { id: 3, name: "Fitness Tracker", price: "$99", image: "/placeholder.svg?height=80&width=80" },
            { id: 4, name: "Bluetooth Speaker", price: "$129", image: "/placeholder.svg?height=80&width=80" },
        ],
    },
    "travel-gear": {
        name: "Travel Gear",
        icon: <ShoppingBag className="h-5 w-5" />,
        items: [
            { id: 1, name: "Carry-on Luggage", price: "$149", image: "/placeholder.svg?height=80&width=80" },
            { id: 2, name: "Travel Pillow", price: "$29", image: "/placeholder.svg?height=80&width=80" },
        ],
    },
}

export default function WishlistDetailScreen({ slug }: { slug: string }) {
    // Convert ID to match our mock data keys
    const wishlistId = slug === "birthday" ? "birthday" : "travel-gear"
    const wishlist = WISHLIST_DATA[wishlistId as keyof typeof WISHLIST_DATA]

    const [items] = useState(wishlist.items)

    return (
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
                {/* Add Item Button */}
                <Button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff9a9a] py-6 font-medium text-white hover:bg-[#ff8080]">
                    <Plus className="h-5 w-5" />
                    <span>Add Item</span>
                </Button>

                {/* Wishlist Items */}
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-sm">
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="h-20 w-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.price}</p>
                            </div>
                            <button className="text-gray-400 hover:text-[#ff9a9a]">
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    )
}
