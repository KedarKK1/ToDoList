import "antd/dist/antd.css"; 
import Homepage from './pages/homePage/Homepage.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

return(
  <div>
    <Navbar />
    {/* <Routes> */}
        {/* <Route path="" exact element={ <Homepage /> } /> */}
        <Homepage />
    {/* </Routes> */}
  </div>
);
}

export default App;
