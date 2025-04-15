"use client"

import { User, Gift, Heart, ShoppingBag, BookOpen } from "lucide-react"
import Image from "next/image"

// Mock notification data
const NOTIFICATIONS = [
    {
        id: 1,
        user: {
            name: "Emma Thompson",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "added a new item to their",
        target: "Birthday wishlist",
        time: "10 minutes ago",
        icon: <Gift className="h-4 w-4" />,
        group: "Today",
    },
    {
        id: 2,
        user: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "liked your",
        target: "Wireless Headphones",
        time: "2 hours ago",
        icon: <Heart className="h-4 w-4" />,
        group: "Today",
    },
    {
        id: 3,
        user: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "created a new",
        target: "Travel Gear wishlist",
        time: "5 hours ago",
        icon: <ShoppingBag className="h-4 w-4" />,
        group: "Today",
    },
    {
        id: 4,
        user: {
            name: "David Wilson",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "shared their",
        target: "Books to Read wishlist",
        time: "Yesterday",
        icon: <BookOpen className="h-4 w-4" />,
        group: "Yesterday",
    },
    {
        id: 5,
        user: {
            name: "Jessica Lee",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "added you as a friend",
        target: "",
        time: "Yesterday",
        icon: <User className="h-4 w-4" />,
        group: "Yesterday",
    },
    {
        id: 6,
        user: {
            name: "Ryan Martinez",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "liked your",
        target: "Smart Watch",
        time: "3 days ago",
        icon: <Heart className="h-4 w-4" />,
        group: "This Week",
    },
    {
        id: 7,
        user: {
            name: "Olivia Brown",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        action: "commented on your",
        target: "Birthday wishlist",
        time: "5 days ago",
        icon: <Gift className="h-4 w-4" />,
        group: "This Week",
    },
]

// Group notifications by time
const groupedNotifications = NOTIFICATIONS.reduce(
    (groups, notification) => {
        const group = notification.group
        if (!groups[group]) {
            groups[group] = []
        }
        groups[group].push(notification)
        return groups
    },
    {} as Record<string, typeof NOTIFICATIONS>,
)

export default function NotificationsScreen() {
    return (
        <div className="flex h-full w-full flex-col">

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
                {Object.entries(groupedNotifications).map(([group, notifications]) => (
                    <div key={group} className="mb-4">
                        <div className="sticky top-0 bg-gray-50 px-6 py-2">
                            <h2 className="text-sm font-medium text-gray-500">{group}</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {notifications.map((notification) => (
                                <div key={notification.id} className="flex items-start gap-3 px-6 py-4 hover:bg-gray-50">
                                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src={notification.user.avatar || "/placeholder.svg"}
                                            alt={notification.user.name}
                                            width={40}
                                            height={40}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">{notification.user.name}</span> {notification.action}{" "}
                                            {notification.target && <span className="font-medium text-[#5d3b90]">{notification.target}</span>}
                                        </p>
                                        <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                                    </div>
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f3eaff] text-[#5d3b90]">
                                        {notification.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
