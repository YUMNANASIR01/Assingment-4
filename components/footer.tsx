import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <><div>
          <section>
              <div className='icons'>
                <Link href={'https://www.facebook.com/'}> <FaFacebookSquare /></Link>
                <Link href={'https://www.instagram.com/accounts/login/?hl=en'}><FaInstagram /></Link> 
                <Link href={''}><FaTwitter /></Link>  
                <Link href={'https://www.linkedin.com/in/yumna-nasir-4382132b5/'}><FaLinkedin /></Link> 
                  <br />
              </div>
          </section>
      </div><section>
              <p className='mypara'>Copyright  &nbsp; © 
                2020 All rights reserved</p>
          </section></>
  )
}
export default Footer
