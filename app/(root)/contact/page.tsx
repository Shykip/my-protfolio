import MoreButton from "@/app/components/MoreButton"

export default function Contact() {
    return (
        <div className="flex flex-col w-full justify-between h-[88vh] max-sm:h-fit">

            <div className="flex w-full gap-24 max-lg:gap-10 max-sm:flex-col max-sm:gap-12 h-full mb-5 max-sm:pb-8">

                <div className="flex flex-col w-[36%] max-lg:w-full justify-between">
                    <div className="flex flex-col">

                        <div className="w-full h-[20vh] hidden max-lg:inline-block mb-10">
                            <img src="img3.png" alt="img3" className=" object-cover w-full h-full"/>
                        </div>
                        <p className="max-font-size-1">Hello,</p>
                        <p className="max-font-size-sub-2 leading-[0.8] font-bold mb-12 max-md:mb-8">I'm <span className="text-highlight">Manish</span></p>
                        <p className="max-font-size-1 font-bold mb-6">LET'S TALK</p>
                        <p className="max-font-size-base mb-10">Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>
                    </div>
                    
                    <MoreButton text="Let's Discuss"/>
                </div>

                <div className="w-[26%] h-full max-h-[76vh] max-lg:hidden">
                    <img src="img3.png" alt="img3" className=" object-cover w-full h-full"/>
                </div>

                <div className="flex flex-col w-fit justify-end max-lg:justify-between">

                    <div className="flex flex-col w-full mb-48 max-sm:mb-20">

                        <div className="flex w-full mb-16 gap-20 max-lg:gap-10 max-sm:gap-10">
                            <div className="flex flex-col gap-4">
                                <p className="max-font-size-base">Name</p>
                                <p className="max-font-size-base">Email</p>
                                <p className="max-font-size-base">Phone.No</p>
                                <p className="max-font-size-base">Location</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="max-font-size-base">Manish Gurung</p>
                                <p className="max-font-size-base">shykiptrainzu@gmail.com</p>
                                <p className="max-font-size-base">+977-9844074611</p>
                                <p className="max-font-size-base">Kathmandu, Nepal</p>
                            </div>
                        </div>

                        <div>
                            <p className="max-font-size-base">
                                <a href="https://www.linkedin.com/in/manish-gurung-b16666248/" target="_blank" rel="noopener noreferrer">Linkedin / </a>
                                <a href="https://dribbble.com/Shykip" target="_blank" rel="noopener noreferrer">Dribbble / <br/></a>
                                <a href="https://github.com/Shykip" target="_blank" rel="noopener noreferrer">Github / </a>
                                <a href="">Instagram</a>
                            </p>
                        </div>
                    </div>
                    <MoreButton text="Download CV" />
                </div>

            </div>

            <div className="flex w-full justify-between pt-5 my-5 max-sm:pt-4 max-sm:mt-0 items-center border-t-2 border-dim">
                <p className="max-font-size-base">Designed by Manish Gurung</p>

                <div className="flex gap-3 max-sm:gap-2 h-8 max-sm:h-6">
                    <a href="https://dribbble.com/Shykip" target="_blank" rel="noopener noreferrer"><img src="icons8-dribbble-50.png" alt="dribbble" className="object-contain h-full w-full" /></a>
                    <a href="https://github.com/Shykip" target="_blank" rel="noopener noreferrer"><img src="icons8-github-50.png" alt="github" className="object-contain h-full w-full" /></a>
                    <a href="https://www.linkedin.com/in/manish-gurung-b16666248/" target="_blank" rel="noopener noreferrer"><img src="icons8-linkedin-50.png" alt="dribbble" className="object-contain h-full w-full" /></a>
                </div>
            </div>
            
        </div>
    )
}