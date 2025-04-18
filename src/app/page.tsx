import SignUpForm from "@/components/sign-up-form"
import {createClientForServer} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export default async function Home() {
  const supabase = await createClientForServer()
  const session = await supabase.auth.getUser()

  if (session) {
    redirect("/wishlists")
  } else {
    return <SignUpForm />
  }
}
