import WordPullUp from '../magicui/word-pull-up'

export const Hero = () => {
  return (
    <div className='h-[100vh]'>
    <div className="w-full h-[200px] flex justify-center">
        <div className="w-[80%] h-full flex justify-center items-center border-2 rounded-xl border-[#d98b50] mt-32">
            <WordPullUp
                className="md:text-5xl text-4xl font-M-semiBold text-[#071620] bg-[#d88b4f] md:p-12 p-3 w-[90%] rounded-xl"
                words="Contactez-nous"
            />
        </div>
    </div>
    </div>
  )
}
