

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show:{
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit:{
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const titleAnimation = {
    hidden: {y: 200},
    show: {
        y: 0, 
        transition: {duration: .75, ease: "easeOut"}
    }
}

export const titleAnimation2 = {
    hidden: {y: 200},
    show: {
        y: 0, 
        transition: {duration: .75, ease: "easeOut", delay:.3}
    }
}


export const photoAni = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.75, delay:.7 }
    }
}

