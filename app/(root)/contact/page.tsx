import MoreButton from "@/app/components/MoreButton"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="flex flex-col w-full justify-between h-[88vh] max-sm:h-fit">

            <div className="flex justify-between w-full gap-24 max-lg:gap-10 max-sm:flex-col max-sm:gap-12 h-full mb-5 max-sm:pb-8">

                <div className="flex flex-col w-[36%] max-lg:w-full justify-between">
                    <div className="flex flex-col">

                        <div className="w-full h-[20vh] hidden max-lg:inline-block mb-10">
                            <Image src="/img3.png" alt="img3" width={561} height={1080} priority={true} className="object-cover w-full h-full" />
                        </div>
                        <p className="max-font-size-1">Hello,</p>
                        <p className="max-font-size-sub-2 leading-[0.8] font-bold mb-12 max-md:mb-8">I'm <span className="text-highlight">Manish</span></p>
                        <p className="max-font-size-1 font-bold mb-6">LET'S TALK</p>
                        <p className="max-font-size-base mb-10">Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>
                    </div>
                    
                    <MoreButton text="Let's Discuss"/>
                </div>

                <div className="flex flex-col w-fit justify-between max-lg:justify-between">

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
                                <Link href="https://www.linkedin.com/in/manish-gurung-b16666248/" target="_blank" rel="noopener noreferrer">Linkedin / </Link>
                                <Link href="https://dribbble.com/Shykip" target="_blank" rel="noopener noreferrer">Dribbble / <br/></Link>
                                <Link href="https://github.com/Shykip" target="_blank" rel="noopener noreferrer">Github / </Link>
                                <Link href="">Instagram</Link>
                            </p>
                        </div>
                    </div>
                    <MoreButton text="Download CV" />
                </div>

                <div className="w-[24%] h-full max-h-[76vh] max-lg:hidden">
                    <Image src="/img3.png" width={561} height={1080} priority={true} alt="img3" className="object-cover w-full h-full" />
                </div>

            </div>

            <div className="flex w-full justify-between pt-5 my-5 max-sm:pt-4 max-sm:mt-0 items-center border-t-2 border-dim">
                <p className="max-font-size-base">Designed by Manish Gurung</p>

                <div className="flex gap-3 max-sm:gap-2 h-8 max-sm:h-6">
                    <Link href="https://dribbble.com/Shykip" target="_blank" rel="noopener noreferrer"><Image src="/icons8-dribbble-50.png" priority={true} width={50} height={50} alt="dribbble" className="object-cover w-full h-full" /></Link>
                    <Link href="https://github.com/Shykip" target="_blank" rel="noopener noreferrer"><Image src="/icons8-github-50.png" priority={true} width={50} height={50} alt="github" className="object-cover w-full h-full" /></Link>
                    <Link href="https://www.linkedin.com/in/manish-gurung-b16666248/" target="_blank" rel="noopener noreferrer"><Image src="/icons8-linkedin-50.png" priority={true} width={50} height={50} alt="linkedin" className="object-cover w-full h-full" /></Link>
                </div>
            </div>
            
        </div>
    )
}