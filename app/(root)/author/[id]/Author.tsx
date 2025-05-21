import { client } from '@/sanity/lib/client'
import { AUTHOR_DETAILS } from '@/sanity/lib/queries'
import React from 'react'

export const experimental_ppr = true

const Author = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const author = await client.fetch(AUTHOR_DETAILS, { id })
    return (
        <div>
            Welcome to your Author page
            <p>Author name: {author.username}</p>
        </div>
    )
}

export default Author
