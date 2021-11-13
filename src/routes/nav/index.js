import { Link } from "react-router-dom";
import "./styles.css"
import SearchBar from "./SearchBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar () {
  return (
    <nav>
      <h1 className="logo">SEGUE</h1>
      <div className="search">
          <SearchBar />
      </div>

      <button id="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
