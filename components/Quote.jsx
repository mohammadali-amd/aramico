import { quote } from "@/images/icons";
import Image from "next/image";
import Divider from "./Divider";

const Quote = ({ text }) => {
  return (
    <div className="relative bg-[#ece8e5] h-[11.2rem] grid grid-cols-1 gap-1 text-center py-8 my-10">
      <div className="absolute right-0 z-0 border-b-[11.2rem] border-b-[#f4f0ed] border-l-[100px] border-l-transparent h-0 w-[56%]"></div>
      <div className="z-10">
        <div className="flex justify-center">
          <Image src={quote} alt="quote" width={36} />
        </div>
        <p className="text-[20px] md:text-[24px] text-secondary">{text}</p>
        <div className="flex justify-center">
          <Divider mb={0} width={150} />
        </div>
        <span className="text-[14px] ">ARAMICO</span>
      </div>
    </div>
  );
};

export default Quote;
