# Emoji Game

Welcome to the Emoji Game! This is a fun and interactive game built with React. The game involves clicking on unique emojis to score points. The goal is to click all emojis without repeating any. Enjoy playing and see if you can achieve the highest score!

## How to Play

1. Initially, the **Score** and **Total Score** are set to **0**.
2. Click on an **Emoji**:
   - If the emoji has not been clicked before, the **Score** increments by one.
   - If all emojis are clicked exactly once, the **Won Game** view is displayed.
   - If an emoji is clicked more than once, the **Lose Game** view is displayed.
   - If the score achieved in the current game is higher than the previous scores, the **Top Score** is updated.
3. Click the **Play Again** button to restart the game. The **Score** resets, but the **Top Score** remains unchanged.

![Emoji Game Output](https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif)

## Game Views

### Extra Small (Size < 576px), Small (Size >= 576px)
![Game View - Small](https://assets.ccbp.in/frontend/content/react-js/emoji-game-sm-outputs.png)

### Medium (Size >= 768px), Large (Size >= 992px), Extra Large (Size >= 1200px)
- Game View
  ![Game View - Large](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png)
- Won Game
  ![Won Game View](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png)
- Lose Game
  ![Lose Game View](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png)


## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Sai-Rama-Krishna-Pittu/Emoji-Game.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Emoji-Game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Game

Start the development server:
```sh
npm start
```
The game will be available at `http://localhost:3000`.

## Components Structure

### Game View Component Breakdown
![Game View Component Breakdown](https://assets.ccbp.in/frontend/content/react-js/emoji-game-game-view-component-breakdown-structure.png)

### Win/Lose View Component Breakdown
![Win/Lose View Component Breakdown](https://assets.ccbp.in/frontend/content/react-js/emoji-game-win-lose-component-breakdown-structure.png)

## Implementation Files

- `src/components/EmojiGame/index.js`
- `src/components/EmojiGame/index.css`
- `src/components/NavBar/index.js`
- `src/components/NavBar/index.css`
- `src/components/EmojiCard/index.js`
- `src/components/EmojiCard/index.css`
- `src/components/WinOrLoseCard/index.js`
- `src/components/WinOrLoseCard/index.css`

## Quick Tips

- Use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element:
  ```css
  cursor: pointer;
  ```
- Use the `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked:
  ```css
  outline: none;
  ```

## Important Note

**The following instructions are required for the tests to pass:**
- The emojis should have the `alt` attribute as the value of the key `emojiName` from each emoji object.

## Resources

### Image URLs

- Game Logo: [https://assets.ccbp.in/frontend/react-js/game-logo-img.png](https://assets.ccbp.in/frontend/react-js/game-logo-img.png)
  - alt: **emoji logo**
- Won Game Image: [https://assets.ccbp.in/frontend/react-js/won-game-img.png](https://assets.ccbp.in/frontend/react-js/won-game-img.png)
- Lose Game Image: [https://assets.ccbp.in/frontend/react-js/lose-game-img.png](https://assets.ccbp.in/frontend/react-js/lose-game-img.png)

### Colors

#### Background Colors
- Hex: #6a59ff
- Hex: #ffffff
- Hex: #3d3d3d
- Hex: #9796f0
- Hex: #fbc7d4
- Hex: #ffffff33
- Hex: #ffce27

#### Border Colors
- Hex: #ffffff30

### Font Families
- Roboto

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Have fun playing the Emoji Game! This is a small project meant to showcase my skills and passion for web development. Feel free to explore the code and suggest improvements.

---

*This project is done for fun and to showcase a small kind of project on GitHub.*
