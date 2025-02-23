import Image from "next/image";
import Link from "next/link";

const MoreButton = (props : {text: string}) => {
    return (
        <Link 
            href={props.text === "Lets's Discuss" ? "mailto:shykiptrainzu@gmail.com" : ""}
            className="flex gap-1 border-2 border-secondary hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-full cursor-pointer h-[2.8vw] w-fit px-[1vw] max-lg:py-5 max-lg:px-5 max-sm:h-10 max-sm:px-4 justify-center items-center"
        >
            <p className="max-font-size-base text-nowrap">{props.text}</p>
            {
                props.text === "Download CV"
                ? <Image src="/icons8-download-64.png" priority={true} width={64} height={64} alt="download" className="object-contain w-5 2xl:w-[1.3vw]" />
                : <Image src="/goto-icon.png" priority={true} width={18} height={18} alt="goto" className="object-contain w-4 2xl:w-[1vw]" />
            }
        </Link>
    )
}

export default MoreButton;