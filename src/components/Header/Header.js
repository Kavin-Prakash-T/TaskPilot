import Logo from '../../assets/logo.png'
import './Header.css'
const Header = ({ theme, setTheme }) => {

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="taskpilotlogo" />
          <h1>TaskPilot</h1>
        </div>
        <div className="themeSelector">
          <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
          <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
          <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
          <span className={theme === "gOne" ? "gOne activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
          <span className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
          <span className={theme === "gThree" ? "gThree activeTheme" : "gThree"} onClick={() => setTheme("gThree")}></span>
        </div>
      </div>
    </header>
  )
}

export default Header