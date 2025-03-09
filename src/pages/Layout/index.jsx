import { Outlet, useLocation } from "react-router";
import AuthProvider from "../../components/AuthProvider";
import VideoProvider from "../../components/VideoProvider";
import Header from "./content/Header";
import Footer from "./content/Footer";
import ModalProvider from "../../components/ModalProvider";
import { useEffect } from "react";

function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);

    return <>
        <AuthProvider>
            <VideoProvider>
                <Header></Header>
                <ModalProvider>
                    <main>
                        <Outlet />
                    </main>
                </ModalProvider>
                <Footer></Footer>
            </VideoProvider>
        </AuthProvider>
    </>
}

export default Layout;