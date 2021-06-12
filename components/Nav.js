import Link from "next/link";
import navStlyes from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStlyes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
