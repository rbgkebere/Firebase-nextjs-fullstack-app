'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import NavabarLink from './navbarLink/NavabarLink'

const links = [
    {
        title:'Contact',
        path:'/contact',
    },
    {
        title:'About',
        path:'/about',
    },
    {
        title:'Blog',
        path:'/blog',
    },
]

export default function Links() {

    const [open,setOpen]=useState(true)
    const session = true
    const isAdmin = true
  return (
    <div>

    <div className='lg:flex gap-2 hidden '>
      {links.map((link, i) => (
        <NavabarLink key={i} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavabarLink item={{ title: 'Admin', path: '/admin' }} />}
          <button className='hover:bg-blue-300 py-1 px-2 rounded-xl' >Log Out</button>
        </>
      ) : (
        <NavabarLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
    <button className='lg:hidden' onClick={()=>setOpen((prev)=>!prev)}>Menu</button>
    {
      open && <div className='bg-blue-200 absolute  flex flex-col top-[48px]
      right-0 w-[25%] h-[calc(100vh-48px)] items-center justify-center
      gap-[10px]'>
        {links.map((link,i)=>(
          <NavabarLink key={i} item={link}/> 
        ))}
      </div>
    }
    </div>
  )
}
