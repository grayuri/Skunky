import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { SwiperSlide } from "swiper/react";

import './Testimonials.scss';
import 'swiper/scss';
import SingleTestimonial from '@/components/SingleTestimonial/SingleTestimonial';
import Slider from '@/components/Slider/Slider';
import wavyTitleAppearence from "@/utils/wavyTitleAppearence";

gsap.registerPlugin(ScrollTrigger)

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      imageUrl: "https://th.bing.com/th/id/R.cf524c11cb6a9dcc3b693c5d9fe19dff?rik=%2bgQumJCYCj0dhQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-4hGDFFPXpg4%2fT47n1429_5I%2fAAAAAAAAAJY%2fZGjK3xkh4Mc%2fs1600%2frevista%2bbizz%2brita%2blee%2b001.jpg&ehk=DYt7ftPU3mAH5FPfR3Ey%2fQ%2fdFeR3bwi0jTVjhpELHYY%3d&risl=&pid=ImgRaw&r=0",
      name: "Sandy Marie",
      testimonial: "One of the best places where I had the pleasure to stay. Good services, awesome products and lovely people."
    },
    {
      id: 2,
      imageUrl: "https://th.bing.com/th/id/OIP.NQzpdQnSvU1RXJN1mqEebwHaHd?pid=ImgDet&rs=1",
      name: "Rick France",
      testimonial: "If I could choose a store and a team to trust, without doubt, it would be the Skunky team."
    },
    {
      id: 3,
      imageUrl: "https://th.bing.com/th/id/OIP.DbacZhnH1ScV4NenxL98QAHaHa?pid=ImgDet&rs=1",
      name: "Doug Ralph",
      testimonial: "Skunky was the place where I learned my first musical instrument. Affection and appreciation defines my feelings about this place."
    },
    {
      id: 4,
      imageUrl: "https://th.bing.com/th/id/R.1b8a7ec75289c07950810cfe4de76c3c?rik=N9mu9nJswEKx2g&pid=ImgRaw&r=0",
      name: "Marie Veridiane",
      testimonial: "They brought back my dear guitar. I was received with lot affection and good attendance by the young and ennergic team."
    },
    {
      id: 5,
      imageUrl: "https://i.em.com.br/Ugrr1kL6Dmt4ToySizP4uzoa5S0=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2019/12/23/1110080/20191222173721146449a.jpg",
      name: "Emerson Veridiano",
      testimonial: "Thanks to Skunky, I earned good friends and the learning of bass and drumms. I love this team..."
    },
    {
      id: 6,
      imageUrl: "https://www.tjtoday.org/wp-content/uploads/2018/11/Joji-900x598.jpg",
      name: "Hélder Luke",
      testimonial: "I walked into a place expecting a simple store of vinyls, but I, fortunately, founded a river of dreams, charisma and happiness. Skunky is the best!"
    },
  ]

  const h1Ref = useRef()

  useEffect(() => {
    const h1Element = h1Ref.current
    const h1ElementSplited = new SplitType(h1Element)

    wavyTitleAppearence(h1Element, h1ElementSplited)

  },[])

  return (  
    <section className="testimonials">
      <h1 ref={h1Ref}>TESTIMONIALS</h1>
      <Slider>
        {
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} index={index}/>
            </SwiperSlide>
          ))
        }
      </Slider>
    </section>
  );
}

export default Testimonials;