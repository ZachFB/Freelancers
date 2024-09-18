
import { useIntersectionObserver } from '@/lib/IntersectionObserverContext';
import Card from '../features/FunCard'
import WordPullUp from '../magicui/word-pull-up'

export const FinalCard = () => {
const { ref, isVisible } = useIntersectionObserver();

  return (
    <div className='w-full mb-16' ref={ref}>
    <section className="mt-40 w-[91%] m-auto">
    {isVisible && <WordPullUp
      className="text-3xl text-[#e1f1f9] font-M-semiBold text-center mb-10"
      words="Chez les Freelancers, nos devises sont :"
       />}
        <Card/>
    </section>
    </div>
  )
}
