import { Link } from "react-router-dom"
import { AnimatedBeamMultipleOutputDemo } from "../A propos /Beam"
import { ChartBarIncreasing, Component, Monitor, PanelsTopLeft, Smartphone } from "lucide-react"

export const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full z-20">
    <div className="flex flex-col justify-center items-center w-full h-full md:gap-48 gap-10">
      <div className="flex md:flex-row flex-col justify-center w-[80%] gap-8 h-full">
        <Link to={"/contact"} className="w-full h-[280px] transition duration-300 ease-out text-[#e1f1f9] hover:bg-[#92c4e70d] transform hover:scale-90 rounded-xl p-4">
           <span className="bg-[#92c4e70d] text-[#d88b4f] md:p-40 rounded-xl"><PanelsTopLeft size={50} /></span>
            <h1 className="text-3xl pb-2 font-M-semiBold">Développement Web</h1>
            <p className="text-justify">Création de sites web sur mesure avec des technologies
             modernes comme React, Next.js, et Tailwind CSS. Optimisation 
             pour la performance, l'accessibilité, et le SEO.</p>
        </Link>
        <Link to={"/contact"} className="w-full h-[280px] transition duration-300 ease-out text-[#e1f1f9] hover:bg-[#92c4e70d] transform hover:scale-90 rounded-xl p-4">
           <span className="bg-[#92c4e70d] text-[#d88b4f] md:p-40 rounded-xl"><Smartphone size={50} /></span>
            <h1 className="text-3xl pb-2 font-M-semiBold">Développement Mobiles</h1>
            <p className="text-justify">Conception et développement d'applications mobiles natives
                 ou hybrides pour Android et iOS, avec une attention particulière à l'expérience
                  utilisateur et à la performance.</p>
        </Link>
      </div>
       <div className="flex md:flex-row flex-col justify-center w-[80%] gap-8 h-full mt-10">
        <Link to={"/contact"} className="w-full h-[280px] transition duration-300 ease-out text-[#e1f1f9] hover:bg-[#92c4e70d] transform hover:scale-90 rounded-xl p-4">
           <span className="bg-[#92c4e70d] text-[#d88b4f] md:p-40 rounded-xl"><Monitor size={50} /></span>
            <h1 className="text-3xl pb-2 font-M-semiBold">Développement Desktop</h1>
            <p className="text-justify">Développement d'applications de bureau multiplateformes 
              utilisant des technologies modernes comme Electron ou Flutter.</p>
        </Link>
        <Link to={"/contact"} className="w-full h-[280px] transition duration-300 ease-out text-[#e1f1f9] hover:bg-[#92c4e70d] transform hover:scale-90 rounded-xl p-4">
          <span className="bg-[#92c4e70d] text-[#d88b4f] md:p-40 rounded-xl"><Component size={50} /></span>
            <h1 className="text-3xl pb-2 font-M-semiBold">Design UX/UI</h1>
            <p className="text-justify">Conception d'interfaces utilisateur intuitives
               et esthétiques pour améliorer l'expérience utilisateur de vos produits numériques.</p>
        </Link>
      </div>
      <div className="flex justify-center w-[80%] gap-8 h-full mt-10">
        <Link to={"/contact"} className="w-full h-[280px] transition duration-300 ease-out text-[#e1f1f9] hover:bg-[#92c4e70d] transform hover:scale-90 rounded-xl p-4">
          <span className="bg-[#92c4e70d] text-[#d88b4f] p-40 rounded-xl"><ChartBarIncreasing size={50} /></span>
            <h1 className="text-3xl pb-2 font-M-semiBold">SEO et Marketing Digital</h1>
            <p className="text-justify">Services pour améliorer la visibilité de votre site sur les moteurs de 
              recherche, ainsi que des stratégies de marketing numérique pour attirer plus de visiteurs..</p>
        </Link>
      </div>
    </div>
    <div className="flex justify-center md:w-[80%] w-[90%] gap-8 h-full text-[#e1f1f9] mt-10">
    <AnimatedBeamMultipleOutputDemo/>
  </div>
  </div>
  )
}
