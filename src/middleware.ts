import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {createClientForServer} from "@/utils/supabase/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith('/login') ||
        pathname.startsWith('/_next') || // very important for CSS/JS
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/api') || // optional, in case you have APIs
        pathname.startsWith('/auth') // optional, in case you have APIs

) {
        return NextResponse.next()
    }
    const supabase = await createClientForServer()
    const session = await supabase.auth.getUser()
    if (!session.data.user) {
        console.log("no user found")
        const loginUrl = request.nextUrl.clone()
        loginUrl.pathname = '/login'
        return NextResponse.redirect(loginUrl)
    }
    console.log('USER')
    console.log(session.data.user.user_metadata.name)
    return NextResponse.next()
    // return NextResponse.redirect(new URL('/login', request.url))
}
