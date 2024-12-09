
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RouteLayout from './layout/layout';
import Error from './components/error/error';
import Blog from './Blogs/blog/blog';
import BlogDetails from './Blogs/blog-details/blog-details';
import Contact from './contact/contact';
import Faqs from './pages/faqs/faqs';
import Booking from './pages/boking/booking';
import Login from './pages/login/Login';
import Home from './pages/home/home';
import AboutUs from './pages/about/AboutUs';
import OurTeam from './pages/ourteam/ourteam';
import Service from './Services/service/Service';
import ServiceDetail from './Services/service-Detail/service-Detail';
import Register from '../../my-app/src/components/register/register';
import ChangePassword from './components/changePassword/changepassword';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path=':doctor?/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/changepassword' element={<ChangePassword />}/>
    <Route path='/doctor' element={<RouteLayout/>}>
      <Route index element={<Home />}/>
      <Route path='about' element={<AboutUs />}/>
      <Route path='faqs' element={<Faqs />}/>
      <Route path='booking' element={<Booking />}/>
      <Route path='ourteam' element={<OurTeam />}/>
      <Route path='service' element={<Service />}/>
      <Route path=':faqs?/service-detail' element={<ServiceDetail />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='blog-details' element={<BlogDetails />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='*' element={<Error />}/>
    </Route>
    </>
  )
) 

function App() {
  return (
    <RouterProvider  router={router}/>
  );
}

export default App;
