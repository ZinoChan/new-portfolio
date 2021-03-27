import { childSlide, parentVariants } from "@helpers/motionVariants"
import { motion } from "framer-motion"



const Title = ({title, text = ""}) => {
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={parentVariants}
       className="mb-16">
           <motion.h2
           custom={-100}
          variants={childSlide}
           className=" relative  mb-4 text-6xl text-primary font-bold font-oswald uppercase">
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
