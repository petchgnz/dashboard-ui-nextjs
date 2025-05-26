import Image from "next/image"
interface SmallCard {
    icons: string;
    title: string;
    desc: string;
}
const SmallCard = ({icons, title, desc}: SmallCard) => {

  return (
        <div className="bg-white p-4 rounded-md flex gap-4 w-full h-full">
            <Image
            src={icons}
            alt=''
            width={24}
            height={24}
            className="w-6 h-6"
            />
            <div className="">
            <h1 className="text-xl font-semibold">{title}</h1>
            <span className="text-sm text-gray-400">{desc}</span>
            </div>
        </div>
  )
}

export default SmallCard