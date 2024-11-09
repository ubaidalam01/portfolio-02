"use client"
import { NavItems } from '@/app/models/Header';
import { userInfo, headerItems } from '@/Constants/Constants'
import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react'
import {Link as ScrollLink} from 'react-scroll'

const Header = () => {
  const [navItems, showNavItems] = useState<boolean>(false);

  return (
    <header>
        <div id='head-div' >
            <h2 id='hd-2'>{userInfo.name}</h2>
            <IoMenu  id='menu'
            size={30}
            onClick={()=> showNavItems(prevState => !prevState)}  />
        </div>
        <div id='hd-div2' className={`${navItems ? 'block' : 'hidden'}`}>
            {
              Object.keys(headerItems).map(item => (
                <ScrollLink 
                    id='hd-scl'
                    to={headerItems[item as keyof NavItems].page} 
                    key={headerItems[item as keyof NavItems].label}
                    spy={true}
                    smooth={true}
                >
                    {headerItems[item as keyof NavItems].label}
                </ScrollLink>
            ))
            }
        </div>
    </header>
  )
}

export default Header
