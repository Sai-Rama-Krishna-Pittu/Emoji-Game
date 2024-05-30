import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    finalEmojisList: [],
    clickedEmojiList: [],
    looseResult: false,
    winResult: false,
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({finalEmojisList: emojisList})
  }

  shuffledEmojisList = () => {
    const {finalEmojisList} = this.state
    return finalEmojisList.sort(() => Math.random() - 0.5)
  }

  lostGame = () => {
    this.setState({looseResult: true})
  }

  wonGame = () => {
    this.setState({winResult: true})
  }

  playAgain = () => {
    this.setState({
      looseResult: false,
      winResult: false,
      score: 0,
      clickedEmojiList: [],
    })
  }

  onClickEmoji = emojiName => {
    const {clickedEmojiList, totalScore, score} = this.state
    const tempClickedEmojiList = [...clickedEmojiList]
    let tempTotalScore = totalScore
    let tempScore
    if (clickedEmojiList.length < 11) {
      if (clickedEmojiList.includes(emojiName)) {
        this.lostGame()
      } else {
        tempClickedEmojiList.push(emojiName)
        tempScore = score + 1
        if (tempScore > totalScore) {
          tempTotalScore = totalScore + 1
        }
        this.setState({
          clickedEmojiList: tempClickedEmojiList,
          score: tempScore,
          totalScore: tempTotalScore,
        })
      }
    } else {
      this.wonGame()
    }
  }

  render() {
    const {score, totalScore, looseResult, winResult} = this.state
    const finalEmojisList = this.shuffledEmojisList()
    const {clickedEmojiList} = this.state
    console.log(clickedEmojiList)

    return (
      <div className="bg-container">
        <div className="emoji-game-container">
          <NavBar
            score={score}
            totalScore={totalScore}
            looseResult={looseResult}
            winResult={winResult}
          />
          {looseResult || winResult ? (
            <WinOrLoseCard
              looseResult={looseResult}
              winResult={winResult}
              score={score}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="emojis-card-container">
              {finalEmojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiCardDetails={eachItem}
                  onClick={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
