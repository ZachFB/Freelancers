import PullUp from "../features/PullUp"



export const Hero = () => {
  return (
    <div className="w-full h-[200px] flex justify-center">
        <div className="w-[80%] h-full flex justify-center items-center border-2 rounded-xl border-[#d98b50] mt-32">
            <PullUp/>
        </div>
    </div>
  )
}
