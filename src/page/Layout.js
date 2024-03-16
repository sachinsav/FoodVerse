import Header from "../components/Header";
import Footer from '../components/Footer';
import Home from './Home';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div><h1 className="text-3xl h-14">H</h1></div>
            <Header />
            <Outlet />
            <Footer />
        </>
        
    );
}

export default Layout;