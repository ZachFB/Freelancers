import { Link } from "react-router-dom"
import free1 from "../../assets/free1.jpg"
import { useIntersectionObserver } from "@/lib/IntersectionObserverContext";
import { motion } from "framer-motion"

export const Service = () => {

  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-40 text-[#e1f1f9]" ref={ref}>
      <h1 className="font-M-medium text-3xl w-[70%] text-center">Nous créons, vous réussissez.</h1>
      <h3 className="text-center text-xl mt-3 font-M-italic">"Chaque projet est unique, nos services aussi."</h3>
      <div className="flex md:flex-row flex-col items-center mt-24 space-x-10 w-full justify-center md:space-y-2 space-y-10">
        <motion.img
          variants={{
            initial: {
              x: -700
            },
            venu: {
              x: 0
            }
          }}

          animate={isVisible ? "venu" : "initial"}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            type: "spring",
            delay: 0.05,
          }}

          className="md:w-[25%] w-[80%] h-[500px] shadow-lg shadow-[#d98b50] rounded-xl" src={free1} alt="" />
        <div className="flex flex-col justify-center items-center md:w-[35%] w-[80%]">
          <section className="grid hover:gap-y-2 w-full place-content-center md:mr-0 mr-9">
            <Link to="/services"><h2 className="text-xl w-full p-6 border cursor-pointer font-M-medium rounded-xl transform transition-transform duration-300 ease-out hover:scale-105">Développement d'application Web</h2></Link>
            <Link to="/services"><h2 className="text-xl w-full p-6 border cursor-pointer font-M-medium rounded-xl transform transition-transform duration-300 ease-out hover:scale-105">Développement d'application mobile</h2></Link>
            <Link to="/services"><h2 className="text-xl w-full p-6 border cursor-pointer font-M-medium rounded-xl transform transition-transform duration-300 ease-out hover:scale-105">Développement d'application Desktop</h2></Link>
            <Link to="/services"><h2 className="text-xl w-full p-6 border cursor-pointer font-M-medium rounded-xl transform transition-transform duration-300 ease-out hover:scale-105">Design UX/UI </h2></Link>
            <Link to="/services"><h2 className="text-xl w-full p-6 border cursor-pointer font-M-medium rounded-xl transform transition-transform duration-300 ease-out hover:scale-105">SEO et Marketing Digital</h2></Link>
          </section>
        </div>
      </div>
    </div>
  )
}
