import Handsontable from 'handsontable/base';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main