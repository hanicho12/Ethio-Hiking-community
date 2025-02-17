import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const HomeLayout = () =>{
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
};
export default HomeLayout;