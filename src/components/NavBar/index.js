import './index.css'

const NavBar = props => {
  const {score, totalScore, looseResult, winResult} = props

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img
          className="navbar-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="navbar-logo-text">Emoji Game</h1>
      </div>
      {looseResult || winResult ? null : (
        <div className="navbar-text-container">
          <p className="navbar-text">Score: {score}</p>
          <p className="navbar-text">Top Score: {totalScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
