import LogoImg from "../assets/images/LWSBlog.svg"

export default function Navbar() {
  return (
    <nav className="py-4 border-b">
    <div className="navbar-container">
    
      <div className="logo">
        <a href="index.html">
          <img src={LogoImg} alt="search" />
        </a>
      </div>
    
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  )
}
