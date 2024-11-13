
import { heebo } from '@/app/font/font';
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <><div  className={heebo.className}>
          
<section className={heebo.className}>
  <div className={heebo.className}>
            <div className='icoons'>
             <Link className=' facebook' href={'https://www.facebook.com/'}> <FaFacebookSquare /></Link>        
                     <Link className="insta" href={'https://www.instagram.com/accounts/login/?hl=en'}><FaInstagram /></Link> 
              <Link className='twitter' href={''}><FaTwitter /></Link>                <Link className="linedin" href={'https://www.linkedin.com/in/yumna-nasir-4382132b5/'}><FaLinkedin /></Link> 
               
             </div>
             </div>
          </section>
      </div><section  className={heebo.className}>
            
         <div className={heebo.className}>

      <p  className=' myparra'>Copyright  &nbsp; © 
               2020 All rights reserved</p>
               </div>      
          </section></>
  )
}
export default Footer
