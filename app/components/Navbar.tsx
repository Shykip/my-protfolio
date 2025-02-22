"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import MenuBar from "./Menubar";
import Link from "next/link";

const Navbar = () => {
    const [menubarState, setMenuBarState] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex justify-between w-100 py-10 max-lg:py-6 h-[12vh] max-sm:h-[10vh] items-center" >

            <div className="text-2xl font-bold max-font-size-1">Manish.</div>
            
            <div className="flex gap-16 font-inter max-font-size-base">
                {/* Prevents hydration mismatch */}
                {mounted && !menubarState ? (
                    <>
                        <Link href="/" className="max-md:hidden">Home</Link>
                        <Link href="/work" className="max-md:hidden">Work</Link>
                        <Link href="/contact" className="max-md:hidden">Contact</Link>
                    </>
                ) : null}
                

                <div className="flex hover:cursor-pointer" onClick={() => setMenuBarState(true)}>
                    <Image src="/menu-icon.png" priority={true} alt="menu" width={47} height={14} className="object-contain 2xl:w-[2.4vw]" />
                </div>

                {mounted && (
                    <div 
                        className={`z-10 absolute right-0 top-0 h-[100vh] w-[100vw] bg-primary bg-opacity-90 ${!menubarState && "hidden"}`}
                        onClick={() => setMenuBarState(false)}
                    >
                        <MenuBar />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
