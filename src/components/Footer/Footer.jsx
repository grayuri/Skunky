import { motion } from "framer-motion";
import Link from "next/link";
import useTransitionRedirect from "@/hooks/useTransitionRedirect";

import './Footer.scss';
import TextSplitAnimation from "../TextSplitAnimation/TextSplitAnimation";

const liVariants = {
  initial: {
    opacity: 0, x: -12
  },

  inView: {
    opacity: 1, x: 0
  }
}

function Footer() {
  const {transitionRedirect} = useTransitionRedirect()

  return (  
    <footer>
      <h1 className="logo">
        <TextSplitAnimation content={"SKUNKY"}/>
      </h1>
      
      <ul className="list-of-links">
        <h2>
          <TextSplitAnimation content={"LINKS"}/>
        </h2>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <Link href="" onClick={(e) => transitionRedirect(e, "/")}>Home</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <Link href="" onClick={(e) => transitionRedirect(e, "/work")}>Work</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <Link href="" onClick={(e) => transitionRedirect(e, "/about")}>About</Link>
        </motion.li>
      </ul>

      <ul className="list-of-contact">
        <h2>
          <TextSplitAnimation content={"CONTACT"}/>
        </h2>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <a href="https://www.instagram.com/brucevictor.jsx/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <a href="https://github.com/grayuri" target="_blank" rel="noopener noreferrer">Github</a>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="initial"
          whileInView="inView"
          viewport={{once: true}}
        >
          <a href="https://www.linkedin.com/in/brucevictor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </motion.li>
      </ul>
    </footer>
  );
}

export default Footer;