import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://cdn.pixabay.com/photo/2020/07/14/16/02/manga-5404746_1280.jpg")` 
    }}>
      <NavBar></NavBar>
      
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
