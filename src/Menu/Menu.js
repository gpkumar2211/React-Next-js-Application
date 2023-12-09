import React from 'react'
import './Menu.css'
import { menuItems } from './configuration'
import Link from 'next/link'
const Menu = () => {
    return <div>
        <ul className='menu'>
            {
                menuItems.map(({ name, link }, ind) => {
                    return <li key={`li_${ind}`}>
                        <Link href={link}>{name}</Link>
                    </li>
                })
            }
        </ul>


    </div>
}

export default Menu
