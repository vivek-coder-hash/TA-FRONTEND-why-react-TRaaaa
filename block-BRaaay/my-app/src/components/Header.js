function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <div>
          <h1>Social Media Dashboard</h1>
          <h4>Total Followers :24000</h4>
        </div>

        <div className="btn-container flex">
          <span>Dark Mode</span>
          <div className="btn flex">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
