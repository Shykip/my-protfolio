import Navbar from "../components/Navbar";

export const metadata = {
    title: "Manish Gurung - Web Developer",
    description: "This is my portoflio webpage!",
}  

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <main className="bg-primary flex-col px-16 max-lg:px-10 cursor-default">
            <Navbar/>
            {children}
        </main>
    )
}