import React from 'react'
import { href, Link } from 'react-router-dom'

const links = [
    {
        name:"Founders",
        href:"#"
    },
    {
        name:"Guide",
        href:"#"
    },{
        name:"Pricing",
        href:"#"
    },{
        name:"Login",
        href:"#"
    },
]
export const Navbar = () => {
  return (
    <div className='flex justify-center'>
        <div className='px-2 my-4'>
        <img src='header-img.svg' alt='logo'/>
        </div>

        <div className='px-4 my-4'>
            {links.map((link,index) => (
                <Link className='p-2' to={link.href} key={index}> {link.name}</Link>
            ))}
        </div>

    </div>
  )
}
