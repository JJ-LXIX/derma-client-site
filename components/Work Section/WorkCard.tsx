import DentalWork from "@/public/images/pexels-anna-shvets-3845765.jpg";
import Image from "next/image";
type Props = {};

function WorkCard({}: Props) {
  return (
    <div className="h-[18rem] md:h-[25rem] w-[90%] relative group shadow-xl overflow-hidden rounded-2xl">
      <div className="absolute bg-red-200 inset-0 rounded-full ">
        <Image
          src={DentalWork}
          fill
          alt="dental work"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 z-2 bg-gradient-to-b from-transparent to-black group-hover:bg-black/90 transition-all duration-300"></div>
      <div className="cursor-default">
        <h3 className="z-10 text-white font-bold absolute bottom-5 left-3 lg:left-5 md:text-3xl group-hover:bottom-[13rem]  transition-all duration-300">
          Treatment Name
        </h3>
        <h3 className="opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 md:text-xl text-white/70  absolute -bottom-10 group-hover:bottom-5 left-3 lg:left-5">
          Treatment details Lorem, ipsum dolor sit amet consectetur adipisicing
          elit Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
    </div>
  );
}

export default WorkCard;
