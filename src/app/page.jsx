"use client"

import { useEffect } from "react";

import Hero from "@/containers/Home/Hero/Hero";
import ShortAbout from "@/containers/Home/ShortAbout/ShortAbout";
import Services from "@/containers/Home/Services/Services";
import Features from "@/containers/Home/Features/Features";
import Testimonials from "@/containers/Home/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import addSmoothScroll from "@/utils/addSmoothScroll";

export default function Home() {
  useEffect(() => {
    addSmoothScroll()
  }, [])

  return (
    <div className="home">
      <Hero />
      <ShortAbout />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}