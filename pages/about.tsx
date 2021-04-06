
import Sphere from "@components/Sphere"
import Title from "@components/Title"
import { childSlide, parentVariants } from "@helpers/motionVariants"
import { motion } from "framer-motion"
import galaxy from '@styles/galaxy.module.scss'

const About = () => {
    const skills=["Html/css", "javascript", "typescript", "reactjs", "nextjs", "gatsbyjs", "redux", "firebase", "tailwindcss", "bootstrap", "figma", "webflow"]
    
    return (
        <>
       <section className="relative min-h-screen  bg-cover bg-center bg-black py-32 flex items-center overflow-x-hidden" style={{backgroundImage: "url(/about-img.jpg)"}}>
       <div className={`${galaxy.stars}`}></div>
      <div className={`${galaxy.twinkling}`}></div>  
           <div className="max-w-screen-2xl mx-auto px-6 w-full">
               <Title title="about me" />
               <motion.p
               initial="hidden"
               animate="visible"
               variants={parentVariants}
               custom={1}
               className="relative z-20 text-white text-bold font-sans text-xl mb-10 leading-normal max-w-screen-md">
             <motion.span className="block" variants={childSlide}>
             Hi, I’m Zineb Elguil I’m a self taught web developer and designer,i live in Mohemmedia Morocco.
             </motion.span>
               <br/><br/>
               <motion.span className="block" variants={childSlide}>
                i Started learning the web developement back in 2018 i felt in love with html & 
                css crash course and i decided to make web developement as my career.    
                </motion.span> <br/><br/>
                <motion.span className="block" variants={childSlide}>
                i love designing and building web apps, 
                i like to try variuos technologies , experience with diffrent
                 frameworks and continue to learn everyday about the web both the designing
                  stage and the development.
                  </motion.span>
               </motion.p>
                <h3 className="relative z-20 text-5xl text-primary font-oswald font-bold uppercase mb-10">My Skills</h3>
                <ul className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4">
                    {
                        skills.map((skill, i) => (
                            <li
                                key={`${skill}-${i}`}
                                className="text-sans text-xl text-white">
                                    {skill}
                            </li>
                        ))
                    }
                </ul>
           </div>
           
       </section>
         
       </>
    )
}

export default About
