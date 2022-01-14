import '../../access/admin/css/adminlte.min.css';
import '../../access/admin/plugins/fontawesome-free/css/all.min.css';
import '../../access/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../access/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../access/admin/plugins/jqvmap/jqvmap.min.css';
import '../../access/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';

import AdminNavigation from "../../Routers/Admin";
import Footer from "../../Templates/Admin/Footer";
import Header from "../../Templates/Admin/Header";
import SideBar from "../../Templates/Admin/SideBar";
import LoginContainer from './LoginContainer';


function Admin(props) {
    return (
        (!window.location.pathname.startsWith('/admin/login')) ?
            <div className="App">
                <Header />
                <SideBar />
                <AdminNavigation />
                <Footer />
            </div>
            :
            <LoginContainer />
    )
}
export default Admin;