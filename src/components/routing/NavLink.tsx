'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps {
    href: string,
    onClick?: (e:any) => void,
    basicClassName?: string,
    activeClassName?: string,
    children: ReactNode
}

export default function NavLink({ href, onClick, basicClassName='', activeClassName='', children }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href
    var className =`${basicClassName}`

    if(basicClassName || activeClassName)
        className = className + isActive ? `${activeClassName}` : ''
    
    return (
        <Link onClick={onClick} href={href} className={className}>
            {children}
        </Link>
    )
}

