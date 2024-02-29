import React, { useState, useTransition } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { cn } from "../lib/utils"
import { Calendar, CalendarRange, Clipboard, GitPullRequest, HandCoins, Home, PieChart, Save, User, Users, Volume2, Waypoints, Wifi } from 'lucide-react';
export default function Sidebar() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const [isPending, startTransition] = useTransition()
    const [tabs, setTabs] = useState(1);
    const selectTab = (nextTab) => {
        startTransition(() => {
            setTabs(nextTab)
        })
    }

    return (
        <div className={cn('h-screen fixed flex')}>
            <div className="fixed-panel w-16  bg-[#5872E3] text-white">
                <TabsList>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={1} selectTab={selectTab} icon={<Home/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={2} selectTab={selectTab} icon={<Waypoints/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={3} selectTab={selectTab} icon={<Clipboard/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={4} selectTab={selectTab} icon={<Users/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={5} selectTab={selectTab} icon={<HandCoins/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={6} selectTab={selectTab} icon={<Calendar/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={7} selectTab={selectTab} icon={<GitPullRequest/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={8} selectTab={selectTab} icon={<PieChart/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={9} selectTab={selectTab} icon={<Volume2/>}></TabsTrigger>
                    <TabsTrigger className='p-4 w-full' active='bg-white text-zinc-800 ' tab={tabs} tabIndex={10} selectTab={selectTab} icon={<User/>}></TabsTrigger>
                </TabsList>
            </div>
            <div className="collapseble-panel w-64 border-r">
                <TabsContent tab={tabs} tabIndex={1} >
                    <div className="text-lg p-4 pb-0">Hello, There 😏</div>
                    <div className="p-4 pt-2 text-zinc-500">You can navigate between modules by setting different icons on left</div>
                </TabsContent>
                <TabsContent tab={tabs} tabIndex={2} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={3} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={4} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={5} >
                    

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={6} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={7} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={8} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={9} >
                    tabs

                </TabsContent>
                <TabsContent tab={tabs} tabIndex={10} >
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