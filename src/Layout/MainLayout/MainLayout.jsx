import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout = () => {
    return (
        <>
            <header className=" mb-[14.36px]">
                <Navbar/>
            </header>
            
            <main className="">
                <Outlet/>
            </main>
            <footer className="text-center container">
                <h4>FOOTER</h4>
            </footer>
        </>
    )
}

export default MainLayout