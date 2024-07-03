import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-blue-200 flex max-w-6xl justify-between
    px-10 items-center py-2 '>
      <div><Link href='/'>Logo</Link></div>
      <div ><Links/></div>
    </div>
  )
}
