import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const MainLayout = () => {



    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;