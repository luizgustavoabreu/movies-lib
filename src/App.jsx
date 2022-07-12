import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
