import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogsy</h1>
      <div className="links">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/create" className="create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
