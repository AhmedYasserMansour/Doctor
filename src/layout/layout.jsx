import Footer from '../components/footer/footer';
import NavBar from '../components/nav/nav';
import { Outlet } from 'react-router-dom';
import Top from '../components/top/top';

const RouteLayout = _ => {
   
    return ( 
        <>
        <NavBar/>
      <Outlet/>
      <Top/>
      <Footer/>
        </>
     );
}
 
export default RouteLayout;