import { motion } from "framer-motion"

function TextSplitAnimation({content, delay}) {
  function getActualDelay () {
    let actualDelay;

    if (delay) {
      actualDelay = delay
    }
    else {
      actualDelay = 0.016
    }

    return actualDelay
  }

  return (
    content.split("").map((letter, index) => {
      return (
        <motion.span
          key={index}
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.64,
              delay: getActualDelay() * index
            }
          }}
          viewport={{once: true}}
        >
          {letter}
        </motion.span>
      )
    })
  )
}

export default TextSplitAnimation;