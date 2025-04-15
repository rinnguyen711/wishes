"use client"

import type React from "react"

import { useState } from "react"
import { Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useRouter} from "next/navigation";

export default function SignUpForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login/signup logic here
        router.refresh()
        router.push("/wishlists")
    }

    return (
        <div className="flex h-full w-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 bg-[#ff9a9a] p-6 text-white">
                <Gift className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Wishes</h1>
            </div>

            {/* Form */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>
                    <p className="text-gray-600">Welcome! Sign in continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md border border-gray-300 px-4 py-3"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md border border-gray-300 px-4 py-3"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="text-sm text-gray-600 hover:underline">
                            Forgot password?
                        </button>
                    </div>
                    <Button
                        type="submit"
                        className="w-full rounded-md bg-[#ff9a9a] py-3 font-medium text-white hover:bg-[#ff8080]"
                    >
                        Log in
                    </Button>
                </form>

                <div className="mt-6 flex-1">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or log in with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                            Google
                        </button>
                        <button className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                            <span className="text-gray-900">Apple</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
