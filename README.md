# jsMiniProject_QuizGame

## Overview
This is a simple quiz game that tests your knowledge of JavaScript functions and object arrays. It's designed to be a fun and educational way to practice your coding skills.

## Getting Started
To get started, follow these steps:

```shell
# Install Required Package
npm install prompt-sync
```

In your JavaScript file, load the `prompt-sync` module as follows:

```javascript
const prompt = require("prompt-sync")();
```

Start the game by welcoming the user and asking if they want to play.

## Playing the Game
Once the game has started, here's how it works:

1. If the user chooses to play (responds with 'yes'), the game proceeds to the `askQuestion()` function.

2. If the user decides not to play (responds with 'no'), a message is displayed, and the game ends.

3. In the `askQuestion()` function, questions are retrieved from the `questions` object. The user is prompted to answer these questions one by one.

4. After all questions have been answered, the `calculateScore` function is called to calculate the user's score.

5. The user's score is displayed, and they are asked if they want to play again. If they choose to play again, the game returns to step 3; otherwise, it ends.

Enjoy playing the quiz game and testing your JavaScript knowledge!
```
