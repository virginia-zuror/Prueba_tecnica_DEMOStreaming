import { NavLink, Outlet } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Outlet className='Outlet'/>
      <Footer/>
    </div>
  );
};

export default App;
