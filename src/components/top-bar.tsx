"use client";

import {ArrowLeft, Gift, User} from "lucide-react";
import type React from "react";
import {usePathname, useRouter} from 'next/navigation'
import Link from "next/link";


export default function TopBar() {
    const router = useRouter()
    const pathname = usePathname()
    const LoggedIn = pathname !== '/'
    if (!LoggedIn) {
        return null;
    }
    return (

        <div className="flex justify-between bg-[#f3eaff] p-6">
            <button onClick={() => router.back()} className="text-gray-800 cursor-pointer">
                <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center space-y-3">
                <Gift className="h-7 w-7 mx-2" />
                Wishlists
            </h1>
            <Link href="/profile">
            <button className="text-gray-800 cursor-pointer">
                <User className="h-6 w-6" />
            </button>
            </Link>
        </div>
    )
}