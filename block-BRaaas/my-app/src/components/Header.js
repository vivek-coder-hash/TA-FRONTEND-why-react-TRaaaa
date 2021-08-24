// Header component
function Header() {
    return (
      <header className="navbar padding">
        <div className="container flex justify-between align-center">
          <a class="brand" href="#">
            <h1>Alt Events</h1>
          </a>
  
          <nav className="nav">
            <ul className="flex align-center">
              <li className="list-control">
                <a href="#">Home</a>
              </li>
              <li className="list-control">
                <a href="#">About</a>
              </li>
  
              <li className="list-control">
                <a href="#">Service</a>
              </li>
              <li className="list-control">
                <a href="#">Contact</a>
              </li>
  
              <li className="list-control">
                <a className="btn">Join us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  