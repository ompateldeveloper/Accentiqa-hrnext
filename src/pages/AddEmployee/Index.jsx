import React, { startTransition, useEffect, useState } from 'react'
import { cn } from '../../lib/utils';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function AddEmployee() {
    const [tabs,setTabs] = useState(0);

    const selectTab = (newtab) => {
        startTransition(()=>{
            setTabs(newtab)
        })
    }
    const nextTab = ()=>{
        if(tabs<4){
            setTabs(prev=>prev+1)
        }
    }
    const prevTab = ()=>{
        if(tabs>0){
            setTabs(prev=>prev-1)
        }
    }
    return (
        <div className='overflow-y-auto'>
            <div className="tab-nav w-full relative h-20 flex items-center justify-between ">
                <div className="absolute h-1 bg-theme-2 w-full -z-10"></div>
                <TabsList className="flex items-center justify-around w-full ">
                    <TabsTrigger active='bg-green-600' selectTab={selectTab} tab={tabs} tabIndex={0} className={cn('bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 ')}></TabsTrigger>
                    <TabsTrigger active='bg-green-600' selectTab={selectTab} tab={tabs} tabIndex={1} className={cn('bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 ')}></TabsTrigger>
                    <TabsTrigger active='bg-green-600' selectTab={selectTab} tab={tabs} tabIndex={2} className={cn('bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 ')}></TabsTrigger>
                    <TabsTrigger active='bg-green-600' selectTab={selectTab} tab={tabs} tabIndex={3} className={cn('bg-green-400 hover:bg-opacity-80  rounded-full h-5 w-5 ')}></TabsTrigger>
                </TabsList>

            </div>
            <div className="w-full">
                <TabsContent tab={tabs} tabIndex={0}>0</TabsContent>
                <TabsContent tab={tabs} tabIndex={1}>1</TabsContent>
                <TabsContent tab={tabs} tabIndex={2}>2</TabsContent>
                <TabsContent tab={tabs} tabIndex={3}>3</TabsContent>
            </div>
            <div className="page-nav flex items-center gap-2">
                <Button secondary onClick={()=>prevTab()} disabled={tabs==0} iconleft={<ArrowLeft className='h-5'/>}>Previous</Button>
                <Button secondary onClick={()=>nextTab()} disabled={tabs==3} iconright={<ArrowRight className='h-5'/>}>Next</Button>
                <Button iconleft={<Check/>}>Finish</Button>
                <Button secondary >Cancel</Button>
            </div>
        </div>
    )
}


function Button(props){
    const {iconleft,iconright,children,className,secondary} = props;
    return(
        <button {...props} className={cn(
            'flex items-center border-[3px] rounded-md px-2 py-1 group font-semibold disabled:saturate-0 ',
            secondary?"bg-theme-2 bg-opacity-0 hover:bg-opacity-40 border-theme-1 text-theme-1 active:bg-opacity-65"
            :"bg-theme-1 border-theme-1 text-white hover:border-opacity-10 hover:bg-opacity-90 active:bg-opacity-80 ",
            className)}
        >

            {iconleft&&iconleft}
            {children}
            {iconright&&iconright}
        </button>
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