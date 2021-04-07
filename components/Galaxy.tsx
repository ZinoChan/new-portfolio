import Image from 'next/image'
import styles from '@styles/planet.module.scss'
import galaxy from '@styles/galaxy.module.scss';

const Galaxy = () => {
    return (
        <div className="bg-dark absolute top-0 left-0 z-10 w-screen min-h-screen h-full">
            <div className={`${galaxy.stars}`}></div>
      <div className={`${galaxy.twinkling}`}></div> 
            <div className={`${styles.planet} ${styles.planet_1} top-1/2 left-1/2`}>
            <Image
                src="/planet1.png"
                alt="planet"
                width={40}
                height={40}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_2} top-1/3 right-1/4`}>
            <Image
                src="/planet3.png"
                alt="planet"
                width={55}
                height={55}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_3} top-1/4 left-2/3`}>
            <Image
                src="/planet2.png"
                alt="planet"
                width={50}
                height={50}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_4} bottom-1/4 left-1/4`}>
            <Image
                src="/planet4.png"
                alt="planet"
                width={45}
                height={45}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_5} top-1/3 left-1/4`}>
            <Image
                src="/planet5.png"
                alt="planet"
                width={45}
                height={45}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_6} top-3/4 left-2/3`}>
            <Image
                src="/planet6.png"
                alt="planet"
                width={25}
                height={25}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_7} bottom-3/4 left-1/4`}>
            <Image
                src="/planet7.png"
                alt="planet"
                width={45}
                height={45}
               
            />
            </div>
            <div className={`${styles.planet} ${styles.planet_8} left-1/2 top-2/3`}>
            <Image
                src="/planet8.png"
                alt="planet"
                width={35}
                height={35}
               
            />
            </div>
        </div>
    )
}

export default Galaxy
