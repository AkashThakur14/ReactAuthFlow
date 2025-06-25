export const Header = () => {
    return (
      <header className="custom-header">
      <div className="container">
        <h1 className="logo">MyWebsite</h1>
        
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>

        <div className="auth-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/signup" className="signup-btn">Signup</a>
        </div>
      </div>
    </header>
    )
  }