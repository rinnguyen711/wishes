"use client"

import { Book, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfileScreen() {
    return (
        <div className="flex h-full w-full flex-col">

            {/* Profile Info */}
            <div className="flex flex-col items-center gap-3 p-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-[#ff9a9a]">
                    <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile picture"
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Olivia Jones</h2>
                <p className="text-center text-gray-600">Always looking for some­thing new to read 📚</p>
            </div>

            {/* My Wishlists */}
            <div className="flex-1 overflow-y-auto p-6">
                <h3 className="mb-4 text-xl font-bold text-gray-900">My Wishlists</h3>

                <div className="flex flex-col space-y-3">
                    {/* Books to Read */}
                    <Link href="/wishlists/books">
                        <div className="flex items-center gap-4 rounded-xl bg-[#f3eaff] p-4 transition-transform hover:scale-[1.02]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5d3b90] text-white">
                                <Book className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Books to Read</h3>
                                <p className="text-sm text-gray-600">3 items</p>
                            </div>
                        </div>
                    </Link>

                    {/* Games */}
                    <Link href="/wishlists/games">
                        <div className="flex items-center gap-4 rounded-xl bg-[#f3eaff] p-4 transition-transform hover:scale-[1.02]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5d3b90] text-white">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Games</h3>
                                <p className="text-sm text-gray-600">Friends only</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
