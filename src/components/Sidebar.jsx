import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Sidebar() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (

        <div className='h-screen w-96'>
            {isSmallScreen &&"helo"}
        </div>
    )
}
