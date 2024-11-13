

import { inter } from '@/app/font/font'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div >
         <section className={ inter.className}>
          <div >
            <div className={ inter.className}>
                <ul className='main-1'>
            
                <span className={ inter.className}><Link href={'/works'}><li>Works</li></Link></span>
                <span className={ inter.className}><Link href={'/blogs'}><li>Blog</li></Link></span> 
                <span className={ inter.className}><Link href={' /contact'}> <li>Contact</li></Link></span>
          
                </ul>
               
            </div>
  </div>
  </section>
    </div>
  )
}

export default Navbar

