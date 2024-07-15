import React from 'react'

export default function ButtonIcon({ name, iconLeft, iconRight, handleClick, display }) {

    return (
        <div className={`w-20 h-10 bg-slate-700 text-white hover:bg-slate-800 hover:font-bold flex items-center px-2 rounded-xl gap-1 text-base cursor-pointer`} onClick={handleClick}>
            <div>{iconLeft}</div>
            <div>{name}</div>
            <div>{iconRight}</div>
        </div>
    )
}
