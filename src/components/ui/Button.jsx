import React from 'react'
import { cn } from '../../lib/utils';

export default function Button(props){
    const {iconleft,iconright,children,className,secondary} = props;
    const sec = Boolean(secondary)
    return(
        <button {...props} className={cn(
            'flex items-center border rounded-md px-2 py-1 group font-semibold disabled:saturate-0 ',
            sec?"bg-theme-1 bg-opacity-0 hover:bg-opacity-10 border-theme-1 text-theme-1 active:bg-opacity-65"
            :"bg-theme-1 border-theme-1 text-white hover:border-opacity-10 hover:bg-opacity-90 active:bg-opacity-80 ",
            className)}
        >

            {iconleft&&iconleft}
            {children}
            {iconright&&iconright}
        </button>
    )
}