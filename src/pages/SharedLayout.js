import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
import Template from './Template';
const Home = () => {
  return (<>
    <Template Outlet={<Outlet />} />
  </>
  );
};
export default Home;
