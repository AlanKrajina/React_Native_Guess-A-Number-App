import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const [guessRounds, setGuessRounds] = useState(0) // if 0 game didnt start yet

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);  // setting guessRounds to 0 on start game
  }

  const gameOverHandler = numOfRounds => { // we want to show this if guessRounds is > 0
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0){ // component switcher 
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/> 
  } else if (guessRounds > 0){
    content = <GameOverScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess A Number'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
