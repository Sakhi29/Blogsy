const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogsy</h1>
      <div className="links">
        <a href="/" className="home">
          Home
        </a>
        <a href="/create" className="create">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
