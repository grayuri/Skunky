import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import useTransitionRedirect from '@/hooks/useTransitionRedirect';

import CallMadeIcon from '@mui/icons-material/CallMade';

import './Services.scss'
import SingleService from '@/components/SingleService/SingleService';
import wavyTitleAppearence from '@/utils/wavyTitleAppearence';

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const {transitionRedirect} = useTransitionRedirect()

  const services = [
    {
      id: 1,
      imageUrl: "https://c0.wallpaperflare.com/preview/680/565/147/lp-music-store-album-record.jpg",
      title: "Sale of Vinyls and CDs",
      description: "With confidence, integrity and quality, we offer vinyls and CDs with deluxed and normal editions."
    },
    {
      id: 2,
      imageUrl: "https://th.bing.com/th/id/R.e8bc2053ee7cbbb766876975d22d5536?rik=33PrGLacbv8GBw&riu=http%3a%2f%2feuro-unit.hr%2fwp-content%2fuploads%2f2017%2f06%2feuro-unit-poslovnice.jpg&ehk=NS0uHV1vad2wKwnWhaRWOa15iTyH304oWXGT6vOCfBo%3d&risl=&pid=ImgRaw&r=0",
      title: "Sale of Musical Instruments",
      description: "If you need an instrument to take your first step, you can count with our great catalog of quality products."
    },
    {
      id: 3,
      imageUrl: "https://th.bing.com/th/id/OIP.DFc5ylHP4GLnS7fgEiuScAHaFe?pid=ImgDet&rs=1",
      title: "Teaching Musical Instruments",
      description: "With a great and committed team, we garantee that you can learn your longed musical instrument."
    },
  ]

  const h1Ref = useRef()

  useEffect(() => {
    const h1Element = h1Ref.current
    const h1ElementSplited = new SplitType(h1Element)

    wavyTitleAppearence(h1Element, h1ElementSplited)
  }, [])

  return (
    <section className="services" id='services'>
      <h1 ref={h1Ref}> OUR SERVICES </h1>

      <motion.ul
        className='list-of-services'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.48,
            duration: 0.48
          }
        }}
        viewport={{ once: true }}
      >
        {
          services.map((service, index) => (
            <SingleService service={service} key={service.id} index={index} />
          )
          )
        }
      </motion.ul>

      <div className="anchor">
        <Link className="link" href="/work" onClick={(e) => transitionRedirect(e, "/work")}>
          <span className="work-anchor">
            Go to Work
          </span>
          <span className="anchor-icon">
            <CallMadeIcon sx={{ width: "22px", height: "22px" }} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Services;