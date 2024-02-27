import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav'
import {inter} from '@/app/ui/fonts'

const layout = ({children} : {children:React.ReactNode}) => {
return (
    <div className='flex h-screeen flex-col md:flex-row md:overflow_hidden'>
        <div className='w-full flex-none md:w-64'>
            <SideNav/>
        </div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
)
}

export default layout