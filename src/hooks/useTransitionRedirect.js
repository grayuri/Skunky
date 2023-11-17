import useTransitionContext from "./useTransitionContext";
import { useRouter, usePathname } from "next/navigation";

export default function useTransitionRedirect () {
  const {dispatch} = useTransitionContext()
  const router = useRouter()
  const pathname = usePathname()

  function transitionRedirect (event, route) {
    event.preventDefault()

    if (pathname === route) return
    
    setTimeout(() => {
      dispatch({type: "ON"})
    }, 2)
    
    setTimeout(() => {
      router.push(route)
      window.scrollTo(0, 0)
      dispatch({type: "OFF"})
    }, 860)

  }

  return { transitionRedirect }
}