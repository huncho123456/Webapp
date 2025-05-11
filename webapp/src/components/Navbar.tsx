const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
        </div>
      <div className="d-flex" role="search">
         <button className="btn btn-sm btn-outline-light">Login</button>
         <button className="btn btn-sm btn-outline-light mx-1">logout</button>
    </div>
    
  </div>
</nav>
  )
}

export default Navbar