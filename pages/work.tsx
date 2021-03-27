import Title from '@components/Title'
import { childSlide, parentVariants } from '@helpers/motionVariants'
import styles from '@styles/utils.module.scss'
import { motion } from 'framer-motion'
import { projects } from 'projects'


const Work = () => {
    return (
      <section className="overflow-x-hidden py-32 bg-black  min-h-screen">
          <div className="max-w-screen-2xl px-6 mx-auto w-full">
                <Title title="My work" text="Collection oof my recent work"/>
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
                        className={`rounded-md relative overflow-hidden h-full w-full ${styles.project} `}>
                        <div className={`${styles.overlay} flex items-center justify-center  z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full`}>
                            <a  className=" text-black font-bold font-sans text-md hidden">View Project</a>
                        </div>
                        <img src={project.img} alt="project" className="w-full h-auto"/>
                    </motion.div>      
                      ))
                   }            
                </motion.div>
            </div>
      </section>
    )
}

export default Work
