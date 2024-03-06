import React, { startTransition, useCallback, useEffect } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { cn } from "../lib/utils"
import { Eye, HandCoins, Home, UserPlus } from 'lucide-react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { Link } from 'react-router-dom';
export default function Sidebar() {

    const { tabs, setTabs,sidebar,setSidebar } = useGlobalContext();


    // breakpoint sidebar fix
    const isLargeScreen = useMediaQuery('(min-width:1023px)')
    useEffect(()=>{
        if(!isLargeScreen) setSidebar(false)
    },[isLargeScreen])


    const selectTab = useCallback((nextTab) => {
        startTransition(() => {
            setTabs(nextTab)
        })
    })

    return (
        <div className={cn('h-[calc(100vh-80px)] fixed flex mt-20 bg-white z-20 duration-100 lg:-translate-x-full',sidebar&&"lg:translate-x-0")}>
            <div className="fixed-panel w-16  bg-theme-1 text-white">
                <TabsList>
                    <Link to='/dashboard' >
                        <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Home'} selectTab={selectTab} icon={<Home />}></TabsTrigger>
                    </Link>
                    <Link to='/dashboard/add-employee' >
                        <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Add Employee'} selectTab={selectTab} icon={<UserPlus />}></TabsTrigger>
                    </Link>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'Payroll'} selectTab={selectTab} icon={<HandCoins />}></TabsTrigger>
                    <Link to='/dashboard/view-employee' >
                        <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={'View'} selectTab={selectTab} icon={<Eye />}></TabsTrigger>
                    </Link>
                </TabsList>
            </div>
            <div className="collapseble-panel w-64 border-r">
                <TabsContent tab={tabs} tabIndex={'Home'} >
                    <div className="text-lg p-4 pb-0">Hello, There 😄</div>
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
    const { tab, selectTab, tabIndex, icon, active } = props;
    return (
        <button
            onClick={() => selectTab(tabIndex)}
            className={cn('p-2 flex items-center justify-center duration-200', props.className, tab === tabIndex && (active || "border-b-blue-500"))}
        >
            {icon && icon}
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