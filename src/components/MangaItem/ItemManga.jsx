import React from 'react'
import { IoIosStar } from "react-icons/io";

export default function ItemManga() {
    return (
        <div className='flex flex-col gap-2 bg-red-400 w-[255px] h-[595px]'>

            <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="w-[255px] h-[383px]">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
            </div>

            <div className='text-white'>
                <p className='text-[34px] font-semibold'>Title</p>
                <p className='text-[28px]'>Chapter</p>
            </div>

            <div className='flex flex-col gap-3 text-white'>
                <div className='flex gap-2 items-center'>
                    <IoIosStar color='gold' size={28} />
                    <p className='text-[28px]'>3.0/5</p>
                </div>

                <div className="px-[10px] py-[5px] bg-[#363636] w-max rounded-[33px] mt-3">
                    <p className="lg:text-[16px] 2xl:text-[18px]  leading-8 font-semibold">
                        Update:
                    </p>
                </div>
            </div>

        </div>
    )
}
