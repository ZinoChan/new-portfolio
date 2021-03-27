import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '@styles/utils.module.scss'
import { motion } from "framer-motion";
import { parentVariants, slideToleft, slideToRight, childSlide } from "@helpers/motionVariants"


export default function Home() {
  return (
    <section style={{backgroundImage: 'url(/bg-home.jpg)', maxWidth: 1800}} className="relative min-h-screen mx-auto flex items-center bg-center  bg-cover overflow-x-hidden">
      <div className="max-w-screen-2xl px-6 mx-auto w-full">
        <motion.h1 
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="leading-relaxed xl:text-8xl md:text-9xl sm:text-6xl text-5xl  font-oswald font-bold  xl:leading-normal md:leading-normal uppercase mb-6">
          <motion.p variants={childSlide} className="text-white">Web</motion.p>
          <motion.p variants={childSlide} className="text-primary">Developer</motion.p>
          <motion.p variants={childSlide}> 
            <span className={`text-white relative ${styles.shape}`}>UI</span> 
            <span className="text-primary"> Designer</span>
          </motion.p>
        </motion.h1>
        <motion.button
         initial="hidden"
         animate="visible"
         variants={slideToRight}   
         custom={1}     
         className={`${styles.btn} relative overflow-hidden text-white border-2 border-primary  px-4 py-2 font-sans capitalize font-black text-md`}>
         <span className="relative z-20"> View my work <FontAwesomeIcon className="ml-2" icon={faLongArrowAltRight} /> </span>
          
        </motion.button>
      </div>
      <motion.div
       initial="hidden"
       animate="visible"
       variants={slideToleft}   
       custom={1.2}     
      className="absolute right-0 bottom-0 h-40 w-10 bg-primary flex flex-col  justify-center items-center space-y-6 text-lg">
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faGithub}/>     
      </motion.div>   
    </section>
  )
}
