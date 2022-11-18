import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Customers from './components/Customers';
import DevApi from './components/DevApi';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  return (
    <div>
      <Navbar isMenuShown={isMenuShown}  setIsMenuShown={setIsMenuShown}/>
      <HeroSection/>
      <Product id="section2"/>
      <DevApi id="section3"/>
      <Customers id="section4"/>
      <Contacts id="section5"/>
      <Footer/>
    </div>
  );
}

export default App;
