import { signOut } from "@/auth";
import React from 'react'

const Signout = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signOut({ redirectTo: "/" });
            }}
        >
            <button type="submit" className="cursor-pointer font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full">Log Out</button>
        </form>
    )
}

export default Signout
