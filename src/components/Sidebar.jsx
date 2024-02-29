import React, { useCallback, useState, useTransition } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { cn } from "../lib/utils"
import { Eye,HandCoins, Home, UserPlus} from 'lucide-react';
import { useGlobalContext } from '../contexts/GlobalContext';
export default function Sidebar() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const [isPending, startTransition] = useTransition()
    const { tabs, setTabs } = useGlobalContext();

    const selectTab = useCallback((nextTab) => {
        startTransition(() => {
            setTabs(nextTab)
        })
    })

    return (
        <div className={cn('h-screen fixed flex')}>
            <div className="fixed-panel w-16  bg-[#5872E3] text-white">
                <TabsList>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Home'} selectTab={selectTab} icon={<Home/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Add Employee'} selectTab={selectTab} icon={<UserPlus/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Payroll'} selectTab={selectTab} icon={<HandCoins/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'View'} selectTab={selectTab} icon={<Eye/>}></TabsTrigger>
                </TabsList>
            </div>
            <div className="collapseble-panel w-64 border-r">
                <TabsContent tab={tabs} tabIndex={'Home'} >
                    <div className="text-lg p-4 pb-0">Hello, There 😏</div>
                    <div className="p-4 pt-2 text-zinc-500">You can navigate between modules by setting different icons on left</div>
                </TabsContent>
                <TabsContent tab={tabs} tabIndex={'Add Employee'} >
                    add

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={'payroll'} >
                    

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={'View'} >
                    tabs

                </TabsContent>
                
            </div>
        </div>
    )
}



function TabsList(props) {
    const { className, children } = props;
    return (
        <nav className={cn("", className)} {...props}>
            <div className="absolute"></div>
            {children}
        </nav>
    )
}


function TabsTrigger(props) {
    const { tab, selectTab, tabIndex, icon ,active} = props;
    return (
        <button
            onClick={() => selectTab(tabIndex)}
            className={cn('p-2 flex items-center justify-center duration-200',props.className, tab === tabIndex && (active || "border-b-blue-500"))}
        >
            {icon&&icon}
            {props.children}
        </button>
    )
}
function TabsContent(props) {
    const { tab, tabIndex, className } = props;
    return (
        tab === tabIndex
        &&
        <div className={cn("container", className)} {...props}>
            {props.children}
        </div>
    )
}