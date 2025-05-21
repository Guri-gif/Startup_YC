import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

export type StartupCardType = Omit<Startup, 'author'> & { author?: Author, image: string }


const StartupCard = ({ post }: { post: StartupCardType }) => {

    const { _createdAt, views, author, description, image, category, title, _id } = post;
    return (
        <li className='bg-white border-[5px] border-black border-r-9 border-b-9 py-6 px-5 rounded-[22px] shadow-200 hover:border-[#EE2B69] transition-all duration-500 hover:shadow-300 hover:bg-[#FFE8F0]'>
            <div className='flex justify-between items-center'>
                <p className='font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full group-hover:bg-white-100;'>
                    {formatDate(_createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-[#EE2B69]' />
                    <span>{views}</span>
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mt-5'>
                <div className='flex flex-col gap-2'>
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-md font-bold ml-4 line-clamp-1'>{author?.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <p className='text-3xl font-bold ml-4 line-clamp-1'>{title}</p>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image className='rounded-full' src={'https://placehold.co/48x48'} width={48} height={48} alt='placeholder'></Image>
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='font-normal text-[16px] ml-4 line-clamp-2 my-3 text-black-100 break-all'>{description}</p>
                <div className="relative w-full h-[164px] rounded-[10px] overflow-hidden">
                    <Image
                        src={image}
                        alt="Startup Image"
                        fill
                        className="object-cover rounded-[10px]"
                    />
                </div>
            </Link>
            <div className='flex justify-between items-center mt-5'>
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className='text-md font-medium'>{category}</p>
                </Link>
                <Button className='bg-black rounded-full font-medium text-[16px] text-white shadow-2xl px-5 py-3 !important' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}
export default StartupCard
