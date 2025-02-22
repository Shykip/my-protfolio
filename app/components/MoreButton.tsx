const MoreButton = (props : {text: string}) => {
    return (
        <a 
            href={props.text === "Lets's Discuss" ? "mailto:shykiptrainzu@gmail.com" : ""}
            className="flex gap-1 border-2 border-secondary hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-full cursor-pointer h-[2.8vw] w-fit px-[1vw] max-lg:py-5 max-lg:px-5 max-sm:h-10 max-sm:px-4 justify-center items-center"
        >
            <p className="max-font-size-base">{props.text}</p>
            {
                props.text === "Download CV"
                ? <img src="icons8-download-64.png" alt="goto" className="object-contain w-5 2xl:w-[1.3vw]" />
                : <img src="goto-icon.png" alt="goto" className="object-contain w-4 2xl:w-[1vw]" />
            }
        </a>
    )
}

export default MoreButton;