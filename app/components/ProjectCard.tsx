import Image from "next/image";

const ProjectCard = (props: { title: string, subTitle: string, stack: string[], setActiveCard: any, index: number, activeCard: any }) => {
    return (
        <div className="flex flex-col border-b-2 border-dim group mb-4 pb-4 max-md:mb-2 max-md:pb-4 cursor-pointer" onMouseEnter={() => props.setActiveCard(props.index)}>
            <div className="flex justify-between">
                <p className="max-font-size-1">{props.title}</p>
                <div className="flex items-center gap-1 max-sm:hidden">
                    <p className="max-font-size-base">Read More</p>
                    <Image src="/goto-icon.png" priority={true} width={18} height={18} alt="goto" className="object-contain 2xl:w-[1vw]" />
                </div>
            </div>

            {/* Smoothly expand/collapse subtitle */}
            <div className={`text-dim max-font-size-base transition-all duration-300 ease-in-out overflow-hidden ${props.activeCard === props.index ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                <p>{props.subTitle}</p>
                <div className="flex gap-2 h-12 max-sm:h-10 max-sm:gap-0 pt-2">
                    {
                        props.stack.map((item, index) => (
                            <Image key={index} className="object-contain" src={`/${item}.png`} priority={true} width={50} height={50} alt={`${item}`} />
                        ))
                    }
                </div>
            </div>
            
        </div>

    );
}

export default ProjectCard;
