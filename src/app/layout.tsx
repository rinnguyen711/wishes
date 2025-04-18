import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import TopBar from "@/components/top-bar";
import NavigationBar from "@/components/navigation-bar";


export const metadata: Metadata = {
    title: "Wishes App",
    description: "Create and manage your wishlists",
}

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <html lang="en">
        <body className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="mobile-container w-full h-full sm:max-w-[500px]  mx-auto overflow-hidden lg:rounded-3xl bg-white shadow-xl">
            <div className="flex flex-col w-full h-full">
                {/* Header */}
                <TopBar/>

                {children}

                <NavigationBar/>
            </div>
        </div>
        </body>
        </html>
    )
}
