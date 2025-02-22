"use client";
import MoreButton from "@/app/components/MoreButton"
import ProjectCard from "@/app/components/ProjectCard"
import { useState } from "react"

const projectCard = [
    {title: "MANABIYA NEPAL", subTitle: "Creating engaging digital experiences", stack: ["react", "express", "mysql"]},
    {title: "VOID STUDIO", subTitle: "Designing modern & secure management system", stack: ["node", "express", "postgre"]},
    {title: "COSMIC SOLUTIONS", subTitle: "Visually stunning web design", stack: ["react", "php", "mysql"]},
    {title: "STYLEFIX HAIR STUDIO", subTitle: "Creating engaging digital experiences", stack: ["react", "node", "mongodb"]},
]

export default function Work() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="flex w-full justify-between h-[88vh] max-sm:h-fit max-md:flex-col max-md:justify-normal pb-10">

            <div className="flex flex-col w-2/5 justify-between max-md:w-full max-md:mb-14">
                <div className="flex flex-col gap-8">
                    <p className="max-font-size-sub font-bold leading-[1]">FEATURED<br className="max-md:hidden"/> WORK</p>
                    <p className="max-font-size-base w-4/5 max-md:w-full mb-10">Olive studio brings your vision to life with stunning designs that reverberate through time, creating waves of creativity and success for you brand.</p>
                </div>
                <MoreButton text="Let's Discuss"/>
            </div>

            <div className="flex flex-col justify-between w-[55%] max-md:w-full">

                <div className="flex flex-col h-fit">
                    {
                        projectCard.map((item: any, index: number) => (
                            <ProjectCard key={index} title={item.title} subTitle={item.subTitle} stack={item.stack} setActiveCard={setActiveCard} index={index} activeCard={activeCard}/>
                        ))
                    }
                </div>

                <div className="h-[40%] overflow-hidden max-sm:mt-10">
                    <img src="img5.png" alt="img5" className="object-cover w-full h-full" />
                </div>

            </div>
            
      </div>
    )
}