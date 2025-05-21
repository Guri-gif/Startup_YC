import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/View'
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

export const experimental_ppr = true

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
    if (!post) return notFound()
    return (
        <>
            <section className='pink_container !min-h-[340px]'>
                <p className='tag'>{formatDate(post._createdAt)}</p>
                <header className='heading rounded-2xl'>
                    {post.title}
                </header>
                <p className='sub-heading'>{post.description}</p>
            </section>
            <section className='section_container'>
                <Image src={post.image} alt='image' width={1240} height={900} className='rounded-xl'></Image>
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex justify-between items-center gap-5">
                        <Link
                            href={`/user/${post.author?._id}`}
                            className="flex gap-2 items-center mb-3"
                        >
                            <Image
                                src={post.author.image}
                                alt="avatar"
                                width={64}
                                height={64}
                                className="rounded-full drop-shadow-lg"
                            />

                            <div>
                                <p className="font-bold text-xl">{post.author.name}</p>
                                <p className="font-medium text-black">
                                    @{post.author?.username}
                                </p>
                            </div>
                        </Link>
                        <p className="font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full shadow-[#FFD6E6] shadow-lg">{post.category}</p>
                    </div>
                </div>
                <h1 className='font-bold text-3xl mt-12'>Pitch Details</h1>
                <p className='mt-12 leading-8 tracking-wider font-medium'>{post.pitch}</p>
                <div className='w-full h-[1px] border-2 border-black my-10'></div>


                <Suspense fallback={<Skeleton className='bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3' />}>
                    <View id={id} />
                </Suspense>

                <h1 className='font-bold text-3xl mt-12'>Similar Startups</h1>
                <Suspense fallback={<Skeleton className='bg-zinc-400 h-[300px] w-[500px]'/>}>

                </Suspense>
            </section>
        </>
    )
}

export default page
