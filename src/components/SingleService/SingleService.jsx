import { motion } from "framer-motion"

import './SingleService.scss'
import TextSplitAnimation from "../TextSplitAnimation/TextSplitAnimation";

function SingleService({service, index}) {
  const textAppearenceDelay = 0.008

  return (  
    <motion.div 
      className="service"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.48 * index } }}
      viewport={{ once: true }}
    >
      <div className="image">
        <img src={service.imageUrl} alt="Service Image" />
      </div>

      <div className="content">
        <h2>
          <TextSplitAnimation content={service.title} delay={textAppearenceDelay} />
        </h2>
        <p>
          <TextSplitAnimation content={service.description} delay={textAppearenceDelay} />
        </p>
      </div>
    </motion.div>
  );
}

export default SingleService;