import Link from "next/link";

const Header = () => {
  return;
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul>
    </nav>
  </header>;
};
export default Header;