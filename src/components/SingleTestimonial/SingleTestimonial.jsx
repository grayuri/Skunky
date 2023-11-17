import { motion } from "framer-motion";

import './SingleTestimonial.scss';

function SingleTestimonial({testimonial, index}) {
  return (
    <motion.div 
      className="testimonial"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.48, delay: 0.24 } }}
    >
      <div className="picture">
        <img src={testimonial.imageUrl} alt="Person Photo" />
      </div>

      <div className="content">
        <h2>{testimonial.name}</h2>
        <p>{testimonial.testimonial}</p>
      </div>

      <svg className='marks' viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.4899 63.4725C51.9932 54.5278 49.0834 44.2347 49.0834 33.7362C49.0834 23.2377 51.9932 12.9446 57.4899 4" stroke="#E070D3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M62.9909 66C67.0967 66 70.425 62.6717 70.425 58.5659C70.425 54.4602 67.0967 51.1319 62.9909 51.1319C58.8852 51.1319 55.5569 54.4602 55.5569 58.5659C55.5569 62.6717 58.8852 66 62.9909 66Z" stroke="#E070D3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.7367 63.4725C7.24007 54.5278 4.3302 44.2347 4.3302 33.7362C4.3302 23.2377 7.24007 12.9446 12.7367 4" stroke="#E070D3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2378 66C22.3435 66 25.6718 62.6717 25.6718 58.5659C25.6718 54.4602 22.3435 51.1319 18.2378 51.1319C14.1321 51.1319 10.8037 54.4602 10.8037 58.5659C10.8037 62.6717 14.1321 66 18.2378 66Z" stroke="#E070D3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </motion.div>
  );
}

export default SingleTestimonial;