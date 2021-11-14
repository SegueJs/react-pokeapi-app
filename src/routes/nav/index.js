import { Link } from "react-router-dom";
import "./styles.css";
import SearchBar from "./SearchBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState("menu");

  const handleBtn = () => {
    if (menu == "menu") {
      setMenu("menu-active");
    } else {
      setMenu("menu");
    }
  };

  return (
    <>
      <nav>
        <h1 className="logo">SEGUE</h1>
        <div className="search">
          <SearchBar />
        </div>

        <button id="hamburger" onClick={handleBtn}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={menu}>
          <li>
            <Link to="/" onClick={setMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about"onClick={setMenu} >About</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={setMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
