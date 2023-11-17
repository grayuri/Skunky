import Link from "next/link";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import useTransitionRedirect from "@/hooks/useTransitionRedirect";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './Menu.scss'

const navVariants = {
  initial: { x: "100vw" },

  animate: {
    x: 0,
    transition: { duration: 0.48, ease: [0.65, 0, 0.35, 1] }
  },
  
  exit: {
    x: "100vw",
    transition: { duration: 0.48, ease: [0.65, 0, 0.35, 1] }
  }
}

const navItemVariants = {
  initial: {
    opacity: 0, x: "100vw"
  },

  animate: {
    opacity: 1, x: 0
  }
}

function Menu({ setShowMenu }) {

  const pathname = usePathname()
  const {transitionRedirect} = useTransitionRedirect()

  function goToRoute(e, route) {
    setShowMenu(false)
    transitionRedirect(e, route)
  }

  return (
    <div className="menu">
      <motion.div
        className="opac-layer"
        onClick={() => setShowMenu(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.24 } }}
        exit={{ opacity: 0, transition: { duration: 0.24 } }}
      />

      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseOutlinedIcon
          className="icon"
          sx={{
            width: "28px", height: "28px"
          }}
          onClick={() => setShowMenu(false)}
        />

        <Link
          className="link"
          href="/"
          onClick={(e) => goToRoute(e, "/")}
        >
          <motion.p 
            className={`nav-item ${pathname === "/" ? "selected" : ""}`}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0.12, duration: 0.24, ease: [0.65, 0, 0.35, 1]}}
          >
            Home
          </motion.p>

        </Link>
        <Link
          className="link"
          href="/work"
          onClick={(e) => goToRoute(e, "/work")}
        >
          <motion.p 
            className={`nav-item ${pathname === "/work" ? "selected" : ""}`}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0.24, duration: 0.24, ease: [0.65, 0, 0.35, 1]}}
          >
            Work
          </motion.p>

        </Link>
        <Link
          className="link"
          href="/about"
          onClick={(e) => goToRoute(e, "/about")}
        >
          <motion.p 
            className={`nav-item ${pathname === "/about" ? "selected" : ""}`}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0.36, duration: 0.24, ease: [0.65, 0, 0.35, 1]}}
          >
            About
          </motion.p>

        </Link>
        <Link
          className="link"
          href="/contact"
          onClick={(e) => goToRoute(e, "/contact")}
        >
          <motion.p 
            className={`nav-item ${pathname === "/contact" ? "selected" : ""}`}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0.48, duration: 0.24, ease: [0.65, 0, 0.35, 1]}}
          >
            Contact
          </motion.p>

        </Link>
      </motion.nav>
    </div>
  );
}

export default Menu;