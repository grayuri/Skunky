"use client"

import { motion, AnimatePresence } from "framer-motion"

import './global.scss'

function Template({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main 
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.48, delay: 0.86}}}
        exit={{opacity: 0, transition: {duration: 0.86}}}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default Template