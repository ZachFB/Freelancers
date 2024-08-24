import AvatarCircles from "@/components/magicui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export function AvatarCircle() {
  return (
    <div className="absolute left-0 md:bottom-[-80px] bottom-[-110px] flex">
  <AvatarCircles numPeople={100} avatarUrls={avatarUrls} />
  <span className="md:mt-3 mt-2 md:ml-3 ml-20 text-xl"> +De 100 entreprises nous font confiances </span>
  </div>
  )
}