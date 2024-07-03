'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavabarLink({ item }) {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className={`${pathName === item.path ? 'bg-white ' : ''} rounded-xl py-1 px-4 `}>
      <Link href={item.path}>{item.title}</Link>
    </div>
  )
}
