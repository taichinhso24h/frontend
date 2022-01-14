import { Router } from 'react-router-dom';
import '../../../src/access/main';
import '../../../src/access/scripts';
import '../../../src/access/theia-sticky-sidebar';
import ClientNavigation from "../../Routers/Client";
import Footer from "../../Templates/Client/Footer";
import Header from "../../Templates/Client/Header";
import MobileMenu from "../../Templates/Client/MobileMenu";



function Client(props) {
    return (
        <div className="mkdf-wrapper">
            <MobileMenu />
            <div className="mkdf-wrapper-inner">
                <Header />
                <ClientNavigation />
                <Footer />
            </div>
        </div>
    )
}
export default Client