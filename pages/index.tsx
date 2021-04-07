import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '@styles/utils.module.scss'
import { motion } from "framer-motion";
import { parentVariants, slideToleft, slideToRight, childSlide, slideUp } from "@helpers/motionVariants"
import Link from 'next/link'

import Galaxy from "@components/Galaxy";
import Image from 'next/image'

export default function Home() {
 

  return (
    <>
   
    
    <section style={{maxWidth: 1800}} className="overflow-hidden py-20 relative z-20 min-h-screen mx-auto flex items-center bg-center  bg-cover overflow-x-hidden">
    <Galaxy/>
     
      <div className="relative z-20 max-w-screen-2xl px-6 mx-auto w-full">
     
      <motion.h1 
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className=" xl:text-7xl text-white lg:text-9xl md:text-6xl text-4xl mb-4 font-main font-bold uppercase xl:leading-normal 2xl:leading-normal lg:leading-normal leading-normal md:leading-normal">
          <motion.p variants={childSlide}>Web</motion.p>
          <motion.p variants={childSlide} >Developer</motion.p>
          <motion.p variants={childSlide}> 
            UI Designer
          </motion.p>
        </motion.h1>
       
        <motion.button
         initial="hidden"
         animate="visible"
         variants={slideToRight}  
         
         custom={1}     
         className={`${styles.btn} focus:outline-none relative border border-primary text-primary  px-6 py-2 font-sans capitalize text-md`}>
         <Link href="/work">
         <span className="relative z-20"> View work <FontAwesomeIcon className="ml-2" icon={faLongArrowAltRight} /> </span>
         </Link>
        </motion.button>
        <motion.div 
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1.5}
        className="xl:absolute xl:-right-20   xl:-bottom-48  z-20 xl:mt-0 mt-10">
        <Image
        className=""
          src="/laptop.png"
          width={860}
          height={630}
        />
      </motion.div>
      </div>
     
      {/* <motion.div
       initial="hidden"
       animate="visible"
       variants={slideToleft}   
       custom={1.2}     
      className="absolute right-0 bottom-0 h-40 w-10 bg-primary flex flex-col  justify-center items-center space-y-6 text-lg">
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faGithub}/>     
      </motion.div>  */}
      
    </section>
    </>
  )
}
