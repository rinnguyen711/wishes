"use client";

import {Bell, House, Search, Users} from "lucide-react";
import Link from "next/link";
import type React from "react";
import {usePathname} from "next/navigation";

export default function NavigationBar() {
    const pathname = usePathname();
    const navigations = [
        {
            path: "/wishlists",
            icon: <House/>,
        },
        {
            path: "/search",
            icon: <Search/>,
        },
        {
            path: "/notifications",
            icon: <Bell/>,
        },
        {
            path: "/people",
            icon: <Users/>,
        }

    ]

    return (
        <div className="mt-auto flex items-center justify-around border-t border-gray-200 p-4">
            {
                navigations.map((item, index) => {
                    const isActive = item.path === pathname;
                    return (
                        <Link key={index} href={item.path} className={`flex flex-col items-center hover:text-[#ff9a9a] ${isActive? 'text-[#ff9a9a]' : 'text-gray-400'}`}>
                            {item.icon}
                        </Link>
                    )
                })
            }

            {/*<button className="flex flex-col items-center text-[#ff9a9a]">*/}
            {/*    <House className="h-6 w-6" />*/}
            {/*</button>*/}
            {/*<button className="flex flex-col items-center text-gray-400">*/}
            {/*    <Search className="h-6 w-6" />*/}
            {/*</button>*/}
            {/*<button className="flex flex-col items-center text-gray-400">*/}
            {/*    <Bell className="h-6 w-6" />*/}
            {/*</button>*/}
            {/*<Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-[#ff9a9a]">*/}
            {/*    <User className="h-6 w-6" />*/}
            {/*</Link>*/}
        </div>
    )
}