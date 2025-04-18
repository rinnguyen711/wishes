'use server'

import {createClientForServer} from "@/utils/supabase/server";
import {redirect} from "next/navigation";


export async function loginWithGoogle() {
    const supabase = await createClientForServer()

    const authCallbackURL = `${process.env.SITE_URL!}/auth/callback`
    console.log({authCallbackURL})
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: "http://localhost:3000/auth/callback",
        }
    })
    console.log({data, error})
    if (data){
        redirect(data.url!)
    }
}
