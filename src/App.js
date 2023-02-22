import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from './pages/admin';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Cart from './pages/cart';
import GlobalData from './store/globalData';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalData>
    <BrowserRouter>
      <div className="App" style={ {
         backgroundImage: `url("https://cdn.pixabay.com/photo/2020/07/14/16/02/manga-5404746_1280.jpg")`}}>
    
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>

        <Route path="/catalog" element={ <Catalog /> }></Route>
        <Route path="/admin" element={ <Admin /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/cart" element={ <Cart /> }></Route>

        <Route path="*" element={<NotFound /> }></Route>

      </Routes>


      <Footer></Footer>
    </div>
    </BrowserRouter>
    </GlobalData>
  );
}

export default App;
