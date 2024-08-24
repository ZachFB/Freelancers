import { PhoneCall } from "lucide-react"
import { Reviews } from "../features/Reviews"
import {motion} from "framer-motion"
import { useIntersectionObserver } from "@/lib/IntersectionObserverContext";


export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-40 text-[#e1f1f9] mb-40">
      <h1 className="font-M-medium text-3xl">Les avis des clients</h1>
      <h3 className="text-center text-xl mt-3 font-M-italic">"Nous somme les meilleur selon nos clients !"</h3>
      <Reviews />
      <div className="flex flex-col mt-28 border rounded-xl md:w-[70%] w-[90%] border-[#d98b50]" ref={ref}>
        <PhoneCall size={50} className="mt-9 ml-9 mb-2 text-[#d98b50]" />
        <h1 className="font-M-italic text-4xl text-center">Votre projet mérite le meilleur</h1>
        <motion.p
        variants={
          {
              initial: {
                  x: -1200
              },
              venu:{
               x:0
              }
          }
       }
       animate={isVisible ? "venu" : "initial"}
       transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.05,
          bounce: 0.3,
       }}
         className="text-center text-md md:pl-9 md:pt-9 md:pr-9 pl-6 pt-6 pr-6 font-M-medium">Ne laissez pas vos idées attendre plus longtemps.
          Si vous avez un projet qui mérite d'être porté à la réalité,
          nous sommes ici pour vous accompagner à chaque étape.
          Nos experts sont prêts à collaborer avec vous pour créer
          des solutions sur mesure qui dépassent vos attentes.
          Faites le premier pas vers le succès, contactez-nous aujourd'hui et
          voyons ensemble comment nous pouvons concrétiser vos idées.</motion.p>
          <div className="flex justify-center w-full">
        <motion.button 
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
        className="relative text-center text-lg mt-4 mb-4 border-2 border-[#d98b50] w-48 py-3 rounded-full overflow-hidden group">
          <span className="relative z-10 font-M-semiBold group-hover:text-[#071620]">Nous contacter</span>
          <span className="absolute inset-0 bg-[#d98b50] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </motion.button>
        </div>
      </div>
    </div>
  )
}
