import { useContext } from "react";
import { TransitionContext } from "@/context/TransitionContext";

export default function useTransitionContext () {
  const context = useContext(TransitionContext)
  if (!context) console.log("Wrapp the element in the context provider.")
  return context
}