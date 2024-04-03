import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRef } from 'react';
const HomeLayout = () =>{
    const scrollThere = useRef(null);
    
    const scrollTo = () =>{
        scrollThere.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <Navbar />
            <Outlet scrollTo={scrollTo}/>
            <Footer scrollTo={scrollTo}/>
        </>
    )
};
export default HomeLayout;