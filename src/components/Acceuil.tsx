import { Contact } from "./Acceuil/Contact"
import { Hero } from "./Acceuil/Hero"
import { Nous } from "./Acceuil/Nous"
import { Service } from "./Acceuil/Service"


export const Acceuil = () => {
  return (
   <div>
    <Hero/>
    <Nous/>
    <Service/>
    <Contact/>
   </div>
  )
}
