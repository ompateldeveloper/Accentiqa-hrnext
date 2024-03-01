import React, { startTransition, useEffect, useState } from 'react'
import { cn } from '../../lib/utils';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import EmployeeDetails from './EmployeeDetails';
import Button from '../../components/ui/Button';
import * as FormElements from '../../components/ui/FormElements';
import Statutoryinfo from './Statutoryinfo';
import Payment from './Payment';
import Employeeposition from './Employeeposition';

export default function AddEmployee() {
    const [tabs, setTabs] = useState(0);

    const selectTab = (newtab) => {
        startTransition(() => {
            setTabs(newtab)
        })
    }
    const nextTab = () => {
        if (tabs < 4) {
            setTabs(prev => prev + 1)
        }
    }
    const prevTab = () => {
        if (tabs > 0) {
            setTabs(prev => prev - 1)
            console.log(tabs);
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
                <TabsContent tab={tabs} tabIndex={0}>
                    <EmployeeDetails />
                </TabsContent>
                <TabsContent tab={tabs} tabIndex={1}>
                    <Employeeposition/>
                </TabsContent>
                <TabsContent tab={tabs} tabIndex={2}>
                    <Statutoryinfo/>
                </TabsContent>
                <TabsContent tab={tabs} tabIndex={3}>
                    <Payment/>
                </TabsContent>
            </div>
            <div className="page-nav flex items-center  gap-2 m-4">
                <Button secondary onClick={() => prevTab()} disabled={tabs == 0} iconleft={<ArrowLeft className='h-5' />}>Previous</Button>
                <Button secondary onClick={() => nextTab()} disabled={tabs == 3} iconright={<ArrowRight className='h-5' />}>Next</Button>
                {tabs == 3 && <Button iconleft={<Check />}>Finish</Button>}
                <Button secondary className=' border-red-700 text-red-700 bg-red-100 '>Cancel</Button>
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