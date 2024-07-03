import Link from 'next/link'
import React from 'react'
import NavabarLink from './navbarLink/NavabarLink'

export default function Links() {
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

    const session = true
    const isAdmin = true
  return (
    <div className='flex gap-2'>
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
  )
}
