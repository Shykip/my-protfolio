import MoreButton from "../components/MoreButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-[88vh] max-sm:h-fit justify-between max-lg:justify-normal pb-10 w-full">
        <div className="flex justify-between">

            <div className="flex flex-col w-2/3">
                <div className="flex justify-between gap-[2vw]">
                    <div className="w-full h-[38vh] max-lg:h-[26vh] max-sm:h-[22vh]">
                        <Image src="/img1.png" width={521} height={928} alt="img1" priority={true} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-[45vh] max-lg:h-[31vh] mr-[2vw] max-sm:h-[26vh]">
                        <Image src="/img2.png" width={581} height={1034} alt="img2" priority={true} className="object-cover w-full h-full" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="max-font-size-1 max-lg:hidden">Hello,</p>
                    <p className="font-bold max-font-size-1 max-lg:hidden">I'm Manish Gurung</p>
                </div>
            </div>

            <div className="w-1/3 h-[53vh] max-lg:h-[35vh] max-sm:h-[31vh]">
                <Image src="/img3.png" width={561} height={1080} alt="img3" priority={true}  className="object-cover w-full h-full" />
            </div>
        </div>

        <div className="flex max-sm:flex-col w-full justify-between">

            <div className="flex flex-col max-sm:mb-8 justify-end">
                <p className="max-font-size-1 mb-1 hidden max-lg:inline-block">Hello,</p>
                <p className="font-bold max-font-size-1 hidden max-lg:inline-block">I'm Manish Gurung</p>
                <div className="flex gap-4 max-sm:mt-4">
                    <p className="font-bold max-font-size-2 leading-[1]">FULL</p>
                    <p className="font-rivage text-highlight max-font-size-3 leading-[0.75] ">stack</p>
                </div>
                <p className="font-bold max-font-size-2 leading-[0.8] max-md:mt-2">DEVELOPER</p>
            </div>

            <div className="w-[34%] max-sm:w-full text-lg flex flex-col justify-end gap-8">
                <p className=" mt-4 max-font-size-base 2xl:leading-[1.5vw]">As a full-stack developer building scalable, intuitive, and market-ready applications with modern technologies</p>
                <MoreButton text="let's Discuss"/>
            </div>

        </div>
    </div>
  );
}
