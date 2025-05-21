import React from 'react'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'
const SearchFrom = ({ query }: { query?: string }) => {
    return (
        <form action={'/'} className='max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[20px] mt-8 px-5 flex flex-row items-center gap-5' >
            <input type="text" name='query' defaultValue={query} className=' flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none' placeholder='Search Startups' />

            <div className='flex gap-2'>
                {
                    query &&
                    <SearchFormReset />
                }

                <button className='cursor-pointer size-[50px] rounded-full bg-black flex justify-center items-center !important text-white' type='submit'>
                    <Search />
                </button>
            </div>
        </form>
    )
}

export default SearchFrom
