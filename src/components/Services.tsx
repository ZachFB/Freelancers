import { Content } from "./Services/Content"
import { Hero } from "./Services/Hero"

export const Services = () => {
  return (
    <div className="w-full overflow-y-hidden">
      <Hero />
     <Content />
    </div>
  )
}

