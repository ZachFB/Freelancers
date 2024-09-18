import WordPullUp from "../magicui/word-pull-up"
import TextRevealByWord from "../magicui/text-reveal"

export const Hero = () => {
    return (
        <div className="h-full relative">
            <div className="w-full h-[200px] flex justify-center">
                <div className="w-[80%] h-full flex justify-center items-center border-2 rounded-xl border-[#d98b50] mt-32">
                    <WordPullUp
                        className="md:text-5xl text-4xl font-M-semiBold text-[#071620] bg-[#d88b4f] md:p-12 p-3 w-[90%] rounded-xl"
                        words="Nos services"
                    />
                </div>
            </div>
            <div className="z-10 flex items-center justify-center 
            rounded-lg md:mt-[350px] mt-[580px] md:mb-20 mb-32 font-M-medium 
            text-[#071620]
            ">
                <TextRevealByWord
                    fontSize="4rem"
                    textAlign="center"
                    text="Des qualités de services comme l'on n'en trouve nul part ailleur." />
            </div>
        </div>
    )
}