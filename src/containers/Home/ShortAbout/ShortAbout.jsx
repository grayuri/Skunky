import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import useTransitionRedirect from "@/hooks/useTransitionRedirect";

import CallMadeIcon from '@mui/icons-material/CallMade';

import './ShortAbout.scss'
import TextSplitAnimation from "@/components/TextSplitAnimation/TextSplitAnimation";
import wavyTitleAppearence from "@/utils/wavyTitleAppearence";

gsap.registerPlugin(ScrollTrigger)

const rightDivVariants = {
  initial: { opacity: 0, x: 12, y: 12 },

  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.48,
      delay: 0.48,
    }
  }
}

function ShortAbout() {
  const {transitionRedirect} = useTransitionRedirect()

  const rightH1Ref = useRef()

  useEffect(() => {
    const rightH1Element = rightH1Ref.current
    const rightH1Splited = new SplitType(rightH1Element)
    wavyTitleAppearence(rightH1Element, rightH1Splited)

  }, [])

  
  const paragraphsAppearenceDelay = 0.006
  const firstParagraphContent = "We, Skunky, are one of the best references in the sale of vinyls, CDs and related musical products. Every day, we put a great deal of effort into our motivations to make customers happy with our services. Born and located in London, we spread happiness, and provide teaching with our personal teachers, who teach musical instruments to our frequent and loyal students, who show their skills to this great and amazing world."
  const secondParagraphContent = "If you are interested in our motivations, feel free to check out our website and our track record of influential continuous evolution."

  return (
    <section className="short-about">
      <div className="left">
        <div className="store-image">
          <Image
            src="/images/vinyl-store.jfif"
            alt="Our Store"
            width={755}
            height={480}
            quality={100}
          />
        </div>
      </div>

      <motion.div className="right"
        variants={rightDivVariants}
        initial="initial"
        whileInView="inView"
        viewport={{once: true}}
      >
        <h1 ref={rightH1Ref}>ABOUT US</h1>


        <p>
          <TextSplitAnimation 
            delay={paragraphsAppearenceDelay / 2}
            content={firstParagraphContent}
          />
        </p>

        <p>
          <TextSplitAnimation 
            delay={paragraphsAppearenceDelay}
            content={secondParagraphContent}
          />
        </p>

        <Link className="link" href="/about" onClick={(e) => transitionRedirect(e, "/about")}>
          <span className="about-anchor">
            Go to About
          </span>
          <span className="anchor-icon">
            <CallMadeIcon sx={{ width: "22px", height: "22px" }} />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

export default ShortAbout;