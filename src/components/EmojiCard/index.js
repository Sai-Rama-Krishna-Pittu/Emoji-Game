// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onClick} = props
  const {id, emojiUrl, emojiName} = emojiCardDetails

  return (
    <li
      className="emoji-card-container"
      key={id}
      onClick={() => onClick(emojiName)}
    >
      <button className="emoji-card-button" type="button">
        <img className="emoji-card-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
