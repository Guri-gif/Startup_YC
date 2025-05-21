import React from 'react'

const Ping = () => {
    return (
        <div className='relative'>
            <div className='absolute -left-4 top-1'>
                <span className=' flex size-[11px]'>
                    <span className='absolute inline-flex h-full w-full rounded-full bg-[#EE2B69]'>
                        <span className='relative inline-flex size-[11px] rounded-full animate-ping bg-[#EE2B69]'>

                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Ping
