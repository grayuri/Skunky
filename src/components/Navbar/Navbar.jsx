"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import useTransitionContext from "@/hooks/useTransitionContext";
import useTransitionRedirect from "@/hooks/useTransitionRedirect";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';

import './Navbar.scss'
import Menu from "../Menu/Menu";
import Headroom from "react-headroom"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const {activateTransition} = useTransitionContext()
  const {transitionRedirect} = useTransitionRedirect()

  const h1TransitionRef = useRef()

  function toggleShowMenu() {
    if (showMenu) setShowMenu(false)
    else setShowMenu(true)
  }

  useEffect(() => {
    const h1TransitionElement = h1TransitionRef.current
    const h1TransitionSplited = new SplitType(h1TransitionElement)

    if (activateTransition) {
      gsap.from(h1TransitionSplited.chars, {
        yPercent: 130,
        stagger: 0.024,
        delay: 0.48,
        duration: 0.48,
        ease: "back.out",

        scrollTrigger: {
          trigger: h1TransitionElement,
          start: "bottom 100%"
        }
      })
    }

  },[activateTransition])

  return (
    <>
      <Headroom style={{ zIndex: 900 }}>
        <header className="navbar">
          <Link className="link" href="/" onClick={(e) => transitionRedirect(e, "/")}>
            <h1>SKUNKY</h1>
          </Link>

          <div className="burguer-menu" onClick={toggleShowMenu}>
            {
              !showMenu
                ? (
                  <DragHandleOutlinedIcon
                    className="icon"
                    sx={{
                      width: "28px", height: "28px"
                    }}
                  />
                )
                : (
                  <CloseOutlinedIcon
                    className="icon"
                    sx={{
                      width: "28px", height: "28px"
                    }}
                  />
                )
            }
          </div>
        </header>
      </Headroom>

      <AnimatePresence mode="wait" onExitComplete={() => setShowMenu(false)}>
        {
          showMenu && <Menu setShowMenu={setShowMenu} />
        }
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {
          activateTransition && (
            <motion.div 
              key="transition"
              className="transition" 
              initial={{ height: "0vh" }}
              animate={{ height: "100vh", transition: { duration: 0.86, ease: [0.65, 0, 0.35, 1] }}}
              exit={{ height: "0vh", transition: { delay: 0.86 }}}
            >
              <h1 ref={h1TransitionRef}>SKUNKY</h1>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default Navbar;