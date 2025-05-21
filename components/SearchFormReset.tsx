"use client"

import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {

    const reset = () => {
        const form = document.getElementsByTagName('form')[0] as HTMLFormElement;
        if (form) form.reset();
    }

    return (
        <button type='reset' onClick={reset}>
            <Link className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white' href={'/'}>
                <X />
            </Link>
        </button>
    )
}

export default SearchFormReset
