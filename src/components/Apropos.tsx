import { Hero } from "./A propos /Hero"
import Equipe  from "../assets/free2.jpg"
import Expertise  from "../assets/free3.jpg"
import { useIntersectionObserver } from "@/lib/IntersectionObserverContext";
import { motion } from "framer-motion";
import { FinalCard } from "./A propos /FinalCard";
import WordPullUp from "./magicui/word-pull-up";

export const Apropos = () => {
  const { ref, isVisible } = useIntersectionObserver();
  return (
   <div className="w-full">
    <Hero/>
    <section className="mt-60 w-[80%] m-auto">
      <h1 className="text-3xl text-[#e1f1f9] font-M-medium text-center mb-4 ">L'innovation au cœur de notre mission</h1>
      <p className="text-md text-[#e1f1f9] font-M-medium text-justify">Chez les Freelancers,
          nous croyons que chaque idée mérite d'être
          transformée en une réalité numérique qui change la donne. Notre équipe
          d'experts passionnés travaille main dans la main avec nos clients pour créer 
          des solutions logicielles sur mesure, parfaitement adaptées à leurs besoins spécifiques. 
          Nous ne nous contentons pas de suivre les tendances – nous les créons. Faisons de ton projet 
          la prochaine grande réussite.</p>
    </section>
    <section className="flex md:flex-row flex-col justify-center pt-40 w-[80%] m-auto lg:gap-24 gap-8" ref={ref}>
      <div className="flex flex-col">
      {isVisible && <WordPullUp
      className="text-3xl text-[#e1f1f9] font-M-semiBold text-center mb-10"
      words="Une équipe, une vision"
       />}
      <motion.img
        variants={
          {
              initial: {
                  x: -700,
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
       className="rounded-xl h-80 w-full" src={Equipe} alt="" />
      <span className="text-md text-[#e1f1f9] font-M-medium 
      text-left mt-12 bg-[#931f4233] p-10 rounded-xl">Nous sommes une équipe de freelances unis par une passion commune : donner vie aux 
        idées les plus audacieuses. Forts de notre expérience et de notre créativité, nous accompagnons
         nos clients à chaque étape de leur parcours digital. De la conception à la réalisation, nous nous
          engageons à fournir des solutions innovantes, robustes et adaptées à chaque projet. Ensemble, 
          construisons l'avenir numérique.</span>
      </div>
      <div className="flex flex-col">
      {isVisible && <WordPullUp
      className="text-3xl text-[#e1f1f9] font-M-semiBold text-center mb-10"
      words="Expertise et créativité"
       />}
      <motion.img 
       variants={
        {
            initial: {
                x: 700,
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
      className="rounded-xl h-80 w-full" src={Expertise} alt="" />
      <span
      className="text-md 
      text-[#e1f1f9] font-M-medium 
      text-left mt-12 bg-[#931f4233] p-10 rounded-xl">Depuis notre création, nous avons aidé des entreprises et des entrepreneurs à transformer
         leurs idées en produits numériques réussis. Notre approche est simple : écouter, 
         comprendre, et créer. Nous combinons une expertise technique solide avec une créativité
          sans limites pour offrir des solutions innovantes qui répondent aux besoins spécifiques 
          de chaque client. Avec [Nom de l'entreprise], ton projet est entre de bonnes mains.</span>
      </div>
    </section>
    <section className="mt-40">
      <h1 className="text-3xl text-[#e1f1f9] font-M-medium text-center mb-10">Des solutions pour réaliser tes rêves</h1>
      <p className="text-md 
      text-[#e1f1f9] font-M-medium 
      text-left mt-12 bg-[#931f4233] p-10 rounded-xl w-[80%] m-auto">Chez les Freelancers, nous savons que derrière chaque grand projet se
         cache une grande vision. C'est pourquoi nous mettons notre expertise au service
          de tes ambitions, en développant des applications qui non seulement répondent à
           tes besoins, mais les dépassent. Notre équipe est dédiée à créer des expériences
            numériques uniques, taillées sur mesure pour te permettre de te démarquer dans un
             monde en constante évolution.</p>
    </section>
    <FinalCard/>
   </div>
  ) 
}
