import "./navbar.css";

import {Link} from 'react-router-dom';
import { useContext } from "react";
import DataContext from "../store/dataContext";

function NavBar() {

  const cart = useContext(DataContext).cart;

    return (
        <nav className="navbar navbar-expand-lg navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">【ＴｏＫｙｏＧｏ】</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to="/cart" className = "btn btn-dark">View Cart
        <span className="badge text-bg-primary">{cart.length}</span>
        </Link>
      </form>
    </div>
  </div>
</nav>
    );
}

export default NavBar;