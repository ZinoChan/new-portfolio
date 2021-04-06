import { childSlide, parentVariants } from "@helpers/motionVariants"
import { motion } from "framer-motion"



const Title = ({title, text = ""}) => {
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={parentVariants}
       className="mb-16 relative z-20">
           <motion.h2
           custom={-100}
          variants={childSlide}
           className=" mb-2 md:text-6xl text-4xl text-primary font-bold font-main uppercase">
              {title}
           </motion.h2>
          {
              text &&  <motion.p  variants={childSlide} className="text-white font-sans font-bold text-lg">
             {text}
          </motion.p>
          }
       </motion.div>
 
    )
}

export default Title
