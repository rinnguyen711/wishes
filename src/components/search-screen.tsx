"use client"

import { useState } from "react"
import { Search, Trash2, Bell, User, Heart, Star } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

// Mock product data
const PRODUCTS = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$199",
        rating: 4.5,
        image: "/placeholder.svg?height=80&width=80",
        category: "Electronics",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$299",
        rating: 4.2,
        image: "/placeholder.svg?height=80&width=80",
        category: "Electronics",
    },
    {
        id: 3,
        name: "Fitness Tracker",
        price: "$99",
        rating: 4.0,
        image: "/placeholder.svg?height=80&width=80",
        category: "Electronics",
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: "$129",
        rating: 4.7,
        image: "/placeholder.svg?height=80&width=80",
        category: "Electronics",
    },
    {
        id: 5,
        name: "Bestselling Novel",
        price: "$19",
        rating: 4.8,
        image: "/placeholder.svg?height=80&width=80",
        category: "Books",
    },
    {
        id: 6,
        name: "Cookbook Collection",
        price: "$35",
        rating: 4.3,
        image: "/placeholder.svg?height=80&width=80",
        category: "Books",
    },
    {
        id: 7,
        name: "Board Game",
        price: "$49",
        rating: 4.6,
        image: "/placeholder.svg?height=80&width=80",
        category: "Games",
    },
    {
        id: 8,
        name: "Carry-on Luggage",
        price: "$149",
        rating: 4.4,
        image: "/placeholder.svg?height=80&width=80",
        category: "Travel",
    },
]

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState("")
    const [products] = useState(PRODUCTS)

    // Filter products based on search query
    const filteredProducts = searchQuery
        ? products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        : products

    return (
        <div className="flex h-full w-full flex-col">

            {/* Search Bar */}
            <div className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-full border border-gray-300 pl-10 pr-4 py-2"
                    />
                </div>
            </div>

            {/* Product List */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex flex-col rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="relative h-32 w-full bg-gray-100">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                                <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm text-gray-400 hover:text-[#ff9a9a]">
                                    <Heart className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex flex-col p-3">
                                <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                                <p className="text-sm font-bold text-gray-900">{product.price}</p>
                                <div className="mt-1 flex items-center">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-auto flex items-center justify-around border-t border-gray-200 p-4">
                <Link href="/wishlists" className="flex flex-col items-center text-gray-400 hover:text-[#ff9a9a]">
                    <Trash2 className="h-6 w-6" />
                </Link>
                <Link href="/search" className="flex flex-col items-center text-[#ff9a9a]">
                    <Search className="h-6 w-6" />
                </Link>
                <button className="flex flex-col items-center text-gray-400">
                    <Bell className="h-6 w-6" />
                </button>
                <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-[#ff9a9a]">
                    <User className="h-6 w-6" />
                </Link>
            </div>
        </div>
    )
}
