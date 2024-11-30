import React from "react";
import Image from "next/image";
import { heebo } from "@/app/font/font";

function Header() {
  return (
    <>
      <section className={`${heebo.className} mainPage`}>
        <div className="mydiv">

          <h1 className=" myh1"><span className={heebo.className}>Hi, I am John,</span></h1>
          <h1 className="myh2"><span className={heebo.className}>Creative Technologist</span></h1>

          <p className="myp"> <span className={heebo.className}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Ducimus blanditiis nobis soluta quia doloribus,
            <br /> ipsa iste beatae iure error, veniam quos excepturi mollitia!
            <br />
            Exercitationem itaque eos, enim tempora repellendus earum?</span>
          </p>
          <button className="button "><span className={heebo.className}>Download Resume</span></button>
        </div>

        <div className="maainimag">
          <Image
            className="myimage"
            src={"/image-1.png"}
            alt={"image-1"}
            width={300}
            height={150}
          />
        </div>
      </section>
    </>
  );
}

export default Header;

