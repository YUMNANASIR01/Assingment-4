
import { heebo } from '@/app/font/font'
import React from 'react'


function Blogs() {
  return (
  <div  className={heebo.className}>
          <section  className={heebo.className} >
<div className='mycolor'>
           <div className='heading' >
       <h2 className='recent'><span className={heebo.className}>Recent post</span></h2>
       <h2 className='view'><span className={heebo.className}>view all</span></h2>
       </div>
       <div className='div1 '>
       <div className= 'div2 '> <h1>Making a design system from scratch</h1>
          <br />
          <h4>12 feb 2020  &nbsp; &nbsp;  | &nbsp; &nbsp;  Design, Pattern</h4> <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Tempora, esse velit odit quisquam accusantium libero
            <br /> quod nostrum incidunt eaque, quia magni repudiandae 
            <br />consectetur aperiam pariatur doloremque,
             soluta exercitationem ullam deserunt.</p>
             <br />
        </div>
       <div className= "mydiv3">  <h1 ><span className={heebo.className}>Making a design system from scratch</span></h1>
          <br />
          <h4>12 feb 2020 &nbsp; &nbsp;  | &nbsp; &nbsp; Design, Pattern</h4> <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Tempora, esse velit odit quisquam accusantium libero
            <br /> quod nostrum incidunt eaque, quia magni repudiandae 
            <br />consectetur aperiam pariatur doloremque,
             soluta exercitationem ullam deserunt.</p>
             <br />
        </div>
       </div>
         <br />
         </div>
           </section>
           
    </div>
  )
}

export default Blogs






