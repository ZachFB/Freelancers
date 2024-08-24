import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/lib/IntersectionObserverContext";
import { Users, Zap } from "lucide-react";

export const Nous = () => {

    const { ref, isVisible } = useIntersectionObserver();

    return (
        <div className='w-full flex flex-col justify-center items-center md:mt-40 mt-16 text-[#e1f1f9]' ref={ref}>
            <h1 className='font-M-medium text-3xl w-[70%] text-center'>Nous somme la solution pour réaliser tes idées d'application (Mobile, Desktop, et Web)</h1>
            <p className="font-M-medium mt-4 text-md w-[60%] text-center text-md">Nous savons que derrière chaque grand projet se cache une grande vision.
                C'est pourquoi nous mettons notre expertise au service de tes ambitions,
                en développant des applications qui non seulement répondent
                à tes besoins, mais les dépassent.</p>
            <motion.div
             variants={
                {
                    initial: {
                        y: 700,
                    },
                    venu:{
                     y:0,
                    }
                }
             }
             animate={isVisible ? "venu" : "initial"}
             transition={{
                duration: 0.9,
                ease: "easeInOut",
                type: "spring",
                delay: 0.05,
             }}
             className="flex md:flex-row flex-col justify-center mt-24 space-x-20"
             >
                <motion.div
                initial={{
                    rotate: -5,
                }}
                  whileHover={{
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                 }}
                 className="flex flex-col items-left md:w-[35%] w-[70%] border-2 border-[#d98b50] p-4 rounded-xl md:m-0 m-auto">
                    <Zap size={50} className="text-[#d98b50]" />
                    <h2 className="text-2xl font-M-medium mt-4">L'Innovation au Cœur de Notre Mission</h2>
                    <p className="text-md font-M-medium mt-4">Nous croyons que chaque idée mérite d'être transformée
                        en une réalité numérique qui change la donne. Notre équipe d'experts passionnés
                        travaille main dans la main avec nos clients pour créer des solutions logicielles...</p>
                    <button className="relative text-center text-lg mt-4 border-2 border-[#d98b50] w-40 py-3 rounded-full overflow-hidden group">
                        <span className="relative z-10 font-M-semiBold group-hover:text-[#071620]">En savoir plus</span>
                        <span className="absolute inset-0 bg-[#d98b50] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </button>
                </motion.div>
                <motion.div
                 initial={{
                    rotate: -5,
                }}
                  whileHover={{
                    rotate: 0,
                  }} 
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                 }}
                className="flex flex-col items-right md:w-[35%] w-[70%] border-2 border-[#d98b50] p-4 rounded-xl md:m-0 m-auto mt-16">
                    <Users size={50} className="text-[#d98b50]" />
                    <h2 className="text-2xl font-M-medium mt-4">Une Équipe, Une Vision</h2>
                    <p className="text-md font-M-medium mt-12">Nous sommes une équipe de freelances unis par une passion commune
                        : donner vie aux idées les plus audacieuses. Forts de notre expérience et de notre créativité,
                        nous accompagnons nos clients à chaque étape de leur parcours digital.</p>
                    <button className="relative text-center text-lg mt-4 border-2 border-[#d98b50] w-40 py-3 rounded-full overflow-hidden group">
                        <span className="relative z-10 font-M-semiBold group-hover:text-[#071620]">En savoir plus</span>
                        <span className="absolute inset-0 bg-[#d98b50] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}