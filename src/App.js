import "antd/dist/antd.css"; //important to import this line otherwise it will not show antd css
import Homepage from './pages/homePage/Homepage.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

return(
  <div>
    <Navbar />
    <Routes>
        <Route path="" exact element={ <Homepage /> } />
    </Routes>
  </div>
);
}

export default App;
