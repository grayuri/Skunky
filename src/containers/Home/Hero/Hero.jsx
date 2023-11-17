"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { Link } from "react-scroll";

import "./Hero.scss"
import TextSplitAnimation from "@/components/TextSplitAnimation/TextSplitAnimation";

function Hero() {
  const h1Content = "Spreading symphony in monotony..."
  const pContent = "An amazing place for you to be amazed by our great offers of good music for your ears."

  return (
    <section className="hero">
      <div className="left">
        <h1>
          <TextSplitAnimation content={h1Content} />
        </h1>
        <p>
          <TextSplitAnimation content={pContent} />
        </p>
        <Link 
          className="learn-offers-button"
          to="services"
          smooth={true}
          offset={-24}
          duration={800}
        >
          <span>What We Offer</span>
        </Link>
      </div>

      <div className="right">
        <div className="black-vinyl">
          <motion.img src="/images/black-vinyl.png" alt="Black Vinyl"
            className="black-vinyl"
            animate={{
              rotate: 360,
              origin: 0,
              transition: {
                duration: 24,
                repeat: Infinity
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;