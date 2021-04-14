import styles from '@styles/utils.module.scss';

const Loader = ({show}) => (
    <div className={`${styles.loader} w-full h-full absolute top-0 left-0 bg-primary z-50 transform  ${show ? 'translate-y-0' : '-translate-y-full'}`}>

    </div>
)

export default Loader;