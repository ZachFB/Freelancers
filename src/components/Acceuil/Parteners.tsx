
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <FramerLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <SketchLogoIcon width={24} height={24} className=" text-[#e1f1f9]" />,
  <TwitterLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <GitHubLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <VercelLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <NotionLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <DiscordLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <InstagramLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
  <LinkedInLogoIcon width={24} height={24} className="text-[#e1f1f9]" />,
];

export const Parteners = () => {
  
  return (
    <div className="relative m-auto w-[60%] rounded-xl h-20 flex justify-center items-center mt-36 overflow-hidden bg-[#071620] before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[#071620] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[#071620] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
