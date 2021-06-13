const Navbar = () => {

  const handleClick = () => {
    document.querySelector('#mobile-menu').classList.toggle('is-active')
    document.querySelector('.navbar__menu').classList.toggle('active')
  }

  return ( 
    <nav className="navbar">
      <div className="navbar__container">
        <a href="./" id="navbar__logo">how much fruit?</a>
      </div>
      <div className="navbar__toggle" id="mobile-menu" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#home" className="navbar__links" id="home-page">home</a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__links" id="about-page">about</a>
        </li>
        <li className="navbar__btn">
          <a href="#fruit-form" className="button" id="sign-up">convert</a>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;