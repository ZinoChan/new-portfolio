import ParticlesEffect from "@components/Particles"
import Title from "@components/Title"
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { childSlide, parentVariants, slideToleft, slideToRight } from "@helpers/motionVariants"
import galaxy from '@styles/galaxy.module.scss'
import { motion } from "framer-motion"



const Contact = () => {

    const contactInfo = [
        {
            text: "devzinochan@gmail.com",
            icon: faEnvelope
        },
        {
            text: "+212 0629872534",
            icon: faPhone
        },
        {
            text: "Morocco, Benslimane",
            icon: faMapMarkerAlt
        },
    ]

    return (
       <section className="relative z-20 pt-32 pb-20 min-h-screen w-full bg-black">
            <div className={`${galaxy.stars}`}></div>
      <div className={`${galaxy.twinkling}`}></div> 
           <div className="relative max-w-screen-2xl w-full mx-auto px-6 z-30">
               <Title title="contact me"/>
               <div className="md:flex md:space-x-8">
                   <motion.form 
                    initial="hidden"
                    animate="visible"
                    variants={parentVariants}
                    custom={1}
                   
                   className="md:w-2/3">
                       <motion.div variants={childSlide} className="mb-6 flex flex-col space-y-4">
                           <label className="text-md text-gray-200 font-sans font-bold capitalize">Your name</label>
                            <input type="text"  className="focus:border-primary focus:outline-none border border-gray-700 bg-transparent  p-2 border-gray-200  text-primary rounded-md"/>
                       </motion.div >
                       <motion.div variants={childSlide}  className="mb-6 flex flex-col space-y-4">
                           <label className="text-md text-gray-200 font-sans font-bold capitalize">Your Email</label>
                            <input type="email"  className="focus:border-primary focus:outline-none border border-gray-700 bg-transparent  p-2 border-gray-200  text-primary rounded-md"/>
                       </motion.div >
                       <motion.div variants={childSlide} className="mb-6 flex flex-col space-y-4">
                           <label className="text-md text-gray-200 font-sans font-bold capitalize">Your Message</label>
                            <textarea  className="focus:border-primary focus:outline-none border border-gray-700 bg-transparent  p-2 border-gray-200  text-primary rounded-md" rows={8}></textarea>
                       </motion.div>
                       <motion.button variants={childSlide} type="submit" className="text-sans bg-primary text-dark-gray text-lg font-bold px-6 py-2">
                           Submit
                       </motion.button>
                   </motion.form>
                  
               <div className="py-10 ">
                  {
                      contactInfo.map((info, index) => (
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={parentVariants}
                        custom={1.3}
                        className="flex items-center space-x-4 text-white mb-4" key={`${info.text}-${index}`}>
                        <motion.span variants={slideToRight} className="w-10 h-10 text-lg bg-secondary  block rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={info.icon} />
                        </motion.span>
                        <motion.p variants={slideToleft} className="font-bold font-sans text-md text-white">{info.text}</motion.p>
                    </motion.div>
                      ))
                  }
                   
               </div>
          
               </div>
           </div>
          <ParticlesEffect/>
       </section>
    )
}

export default Contact
