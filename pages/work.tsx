import ParticlesEffect from '@components/Particles'
import Title from '@components/Title'
import { childSlide, parentVariants } from '@helpers/motionVariants'
import styles from '@styles/utils.module.scss'
import { motion } from 'framer-motion'
import { projects } from 'projects'
import Image from 'next/image'

const Work = () => {
    return (
      <section className="relative overflow-x-hidden py-32 bg-dark  min-h-screen">
        <div className="absolute top-10 -left-10">
        <Image
          src="/cloud.png"
          alt="cloud"
          width={320}
          height={80}
        />
        </div>
        <div className="absolute top-40 -right-10">
        <Image
          src="/cloud.png"
          alt="cloud"
          width={320}
          height={80}
        />
        </div>
          <div className="max-w-screen-2xl px-6 mx-auto w-full">
                <Title title="My work" text="Collection of my recent work"/>
                <motion.div 
                 initial="hidden"
                 animate="visible"
                 variants={parentVariants}
                 custom={1}
                className="grid lg:grid-cols-2 grid-cols-1 gap-8 overflow-hidden ">
                   {
                      projects.map(project => (
                        <motion.div 
                        variants={childSlide}
                        key={project.id}
                        className={`rounded-md relative z-20 overflow-hidden h-full w-full ${styles.project} `}>
                        <div className={`${styles.overlay} flex  px-6 text-center items-center justify-center mb-1 z-10 absolute  w-full h-full`}>
                          <div>
                          <h2 className="text-primary font-sans font-bold md:text-3xl text-xl mb-2">Education sharity Kodomo</h2>
                           <p className="font-sans text-gray-200 md:text-lg text-md md:mb-6 mb-1">
                           Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                           </p>
                           <span className="text-primary md:text-xl text-md md:mb-8 mb-1 block">
                           Reactjs/ tailwindcss/ framer-motion
                           </span>
                           <div className="flex justify-between items-center md:px-10">
                            <a  className=" text-secondary font-bold font-sans text-md">View Project</a>
                            <a  className=" text-secondary font-bold font-sans text-md ">View Source</a>
                           </div>
                          </div>
                        </div>
                        <img src={project.img} alt="project" className="w-full h-full"/>
                    </motion.div>      
                      ))
                   }            
                </motion.div>
            </div>
            <ParticlesEffect/>
      </section>
    )
}

export default Work
