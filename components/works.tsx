

import React from 'react'
import Image from 'next/image'
import { heebo } from '@/app/font/font'

function Works() {
  return (
    <div  className={heebo.className}>
         <section>
            <div>
              
           <h3  className={heebo.className}>Featured works</h3>
           <h3 className='dash' ><span className={heebo.className} >Designing Dashboards </span></h3> <br />
           <Image className=' myimmmg'   src={'/Rectangle 30.png'} alt={'image-2'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash'>Dashboard</h2> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
      </div>
           </section>
           <br />
           <br />
           <br />

           <section  className={heebo.className}>
           <h3 className='dash' ><span className={heebo.className}>Designing Dashboards </span> </h3>
           <Image className='myimmmg'   src={'/Rectangle 32.png'} alt={'image-2'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash'>Dashboard</h2> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
      <br />
           </section>
           <br />
           <br /><br /> <br />
           <section  className={heebo.className}>
           <h3 className='dash' ><span className={heebo.className}>Designing Dashboards </span></h3> 
           <Image className='myimmmg'   src={'/Rectangle 34.png'} alt={'image-2'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash' ><span  className={heebo.className}>Dashboard</span></h2> 
      <p  className={heebo.className}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
           </section>
           <br />
           <br />
           <br />
           <br />
           <br />
    </div>
  )
}

export default Works