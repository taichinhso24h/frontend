import '../src/access/main';
import '../src/access/scripts';
// import '../src/access/score-script';
// import '../src/access/sportspress';
import '../src/access/theia-sticky-sidebar';
// Admin
import Admin from "./Containers/Admin";
import Navigation from './Routers';
import Footer from "./Templates/Client/Footer";
import Header from "./Templates/Client/Header";
import MobileMenu from "./Templates/Client/MobileMenu";



function App() {
  return (
    (!window.location.pathname.startsWith('/admin')) ?
      <div className="mkdf-wrapper">
        <MobileMenu />
        <div className="mkdf-wrapper-inner">
          <Header />
          <Navigation />
          <Footer />
        </div>
      </div>
      :
      <Admin/>
  );
}

export default App;
