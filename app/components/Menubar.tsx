import MoreButton from "./MoreButton";

const MenuBar = () => {
 return (
    <div className="bg-primary h-fit pt-11 pb-16 w-[30%] max-md:w-[100vw] z-50 absolute right-0 top-0 flex flex-col gap-5 max-font-size-base px-16 max-lg:px-10 animate-dropdown">
        <a href="/" className="border-b-2 w-full border-dim pb-4 flex justify-start">Home</a>
        <a href="/contact" className="border-b-2 w-full border-dim pb-4 flex justify-start">About</a>
        <a href="/work" className="border-b-2 w-full border-dim pb-4 flex justify-start">Work</a>
        <a href="/contact" className="border-b-2 w-full border-dim pb-4 mb-5 flex justify-start">Contact</a>
        <MoreButton text="Lets's Discuss"/>
        <MoreButton text="Download CV"/>
    </div>

 )
}

export default MenuBar;