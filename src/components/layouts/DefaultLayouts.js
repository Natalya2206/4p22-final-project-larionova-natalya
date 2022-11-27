import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../Footer/Footer';

function DefaultLayout () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default DefaultLayout;