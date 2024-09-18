import { Globe } from "lucide-react"
import { OrbitingCircle } from "../features/OrbitingCircle"
import { AvatarCircle } from "../features/AvatarCircle"
import { Link } from "react-router-dom"


export const Hero = () => {
  return (
     <div className='font-M-medium flex lg:flex-row m-auto text-[#e1f1f9] flex-col w-full lg:px-24 md:px-8 px-8 justify-center items-center space-y-5 lg:py-16 py-36'>
      <section className='relative'>
        <h1 className="text-5xl text-left font-M-semiBold">Transforme ton idée en application soft,</h1>
        <h3 className="text-left text-3xl mt-3 font-M-italic">Tu peux nous faire confiance</h3>
        <p className="text-left text-md mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur doloremque 
          officia magnam. Naira doloribus, tempora voluptatibus voluptatum, aspernatur
        </p>
        <Link to='/contact' className="relative flex text-center text-lg mt-3 border-2 border-[#d98b50] w-80 py-3 overflow-hidden group
        rounded-full">
          <Globe size={30} className="relative z-10 mr-3 ml-2 group-hover:text-[#071620]"/>
        <span className="relative z-10 font-M-semiBold text-[#e1f1f9] group-hover:text-[#071620]">Commence Maintenant !</span>
        <span className="absolute inset-0 bg-[#d98b50] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </Link>
        <AvatarCircle/>
      </section>
      <section>
        <OrbitingCircle/>
      </section>
    </div>
  )
}
