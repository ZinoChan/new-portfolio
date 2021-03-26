export const slideDown = {
    visible:  (i = 0.1) => ({
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: .4,
            delay: i
        }
    }),
    hidden: {y: -100, opacity: 0}
}

export const slideUp = {
    visible: (i = 0.1) => ({
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: .4,
            delay: i
        }
    }),
    hidden: {y: 100, opacity: 0}
}

export const slideToRight = {
    visible:  (i = 0.1) => ({
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeInOut",
            duration: .4,
            delay: i
        }
    }),
    hidden: {x: -100, opacity: 0}
}

export const slideToleft = {
    visible:  (i = 0.1) => ({
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeInOut",
            duration: .4,
            delay: i
        }
    }),
    hidden: {x: 100, opacity: 0}
}

export const parentVariants = {
    visible: {
        opacity: 1,
        
        transition: {
            ease: "easeInOut",
            duration: .4,
            when: "beforeChildren",
      staggerChildren: 0.3,
        }
    },
    hidden: { opacity: 0,  transition: {
        when: "afterChildren",
      },}
}

export const childSlide = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: .4,
         
        }
    },
    hidden: (i = 100) => ({y: i, opacity: 0})
}