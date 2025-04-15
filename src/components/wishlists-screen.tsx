"use client"

import { Plus, Gift, Briefcase} from "lucide-react"
import Link from "next/link"

export default function WishlistsScreen() {
    return (
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
                {/* New Wishlist Button */}
                <button className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-full bg-[#ff9a9a] py-3 font-medium text-white hover:bg-[#ff8080]">
                    <Plus className="h-5 w-5" />
                    <span>New Wishlist</span>
                </button>

                {/* Wishlist Items */}
                <div className="flex flex-col space-y-3">
                    {/* Birthday Wishlist */}
                    <Link href="/wishlists/birthday">
                        <div className="flex items-center gap-4 rounded-xl bg-[#f3eaff] p-4 transition-transform hover:scale-[1.02]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5d3b90] text-white">
                                <Gift className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Birthday</h3>
                                <p className="text-sm text-gray-600">4 items</p>
                            </div>
                        </div>
                    </Link>

                    {/* Travel Gear Wishlist */}
                    <Link href="/wishlists/travel-gear">
                        <div className="flex items-center gap-4 rounded-xl bg-[#f3eaff] p-4 transition-transform hover:scale-[1.02]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5d3b90] text-white">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Travel Gear</h3>
                                <p className="text-sm text-gray-600">2 items</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

    )
}
