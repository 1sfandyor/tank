import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Counter from "../../components/Counter/Counter"
import { Features } from "../../components/Features/Features"

const MainLayout = () => {
    return (
        <>
            <header className=" mb-[14.36px]">
                <Navbar/>
            </header>
            
            <main className="">
                <Outlet/>
                <div className="container md:px-5 ">
                    <Counter/>
                    <Features/>
            </main>
            <footer className="text-center container">
                <h4>FOOTER</h4>
            </footer>
        </>
    )
}

export default MainLayout