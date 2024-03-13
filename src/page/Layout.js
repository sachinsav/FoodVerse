import Header from "../components/Header";
import Footer from '../components/Footer';
import Home from './Home';

const Layout = () => {
    return (
        <>
            <div><h1 className="text-3xl h-14">H</h1></div>
            <Header />
            <Home />
            <Footer />
        </>
        
    );
}

export default Layout;