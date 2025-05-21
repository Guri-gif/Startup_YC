
import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="cursor-pointer font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full">Login</button>
    </form>
  )
} 