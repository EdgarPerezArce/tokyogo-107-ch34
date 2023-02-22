import { Link } from "react-router-dom";
import "./home.css";
import Catalog from './catalog';


function Home() {
    return(
        <div className="home">
            <h1>Irasshaimase!</h1>
            <h4>Come Get Your Otaku Gear</h4>

            <Link className='btn btn-primary' to="/catalog">Check out the Goods</Link>
        </div>

    );
}

export default Home;