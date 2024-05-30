// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {looseResult, score, playAgain} = props
  if (looseResult) {
    return (
      <div className="game-result-container">
        <img
          className="game-result-image"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        />
        <div className="game-result-text-container">
          <h1 className="game-result-heading">You Lose</h1>
          <p className="game-result-score-description">Score</p>
          <p className="game-result-score">{score}/12</p>
          <button
            className="game-result-button"
            data-testid="Play Again"
            onClick={() => playAgain()}
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="game-result-container">
      <img
        className="game-result-image"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
      <div className="game-result-text-container">
        <h1 className="game-result-heading">You Won</h1>
        <p className="game-result-score-description">Best Score</p>
        <p className="game-result-score">12/12</p>
        <button
          className="game-result-button"
          data-testid="Play Again"
          onClick={() => playAgain()}
          type="button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
