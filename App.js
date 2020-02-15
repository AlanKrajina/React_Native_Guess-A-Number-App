import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'; 
import { AppLoading } from 'expo'; // prolongs screen loading until something is done (fetchedFonts)
                                   // used to load fonts 

const fetchFonts = () => { // returns Promise
  Font.loadAsync({    // passed in object to pick fonts to load
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})}             // <AppLoading> will use loading to fetch fonts

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0) // if 0 game didnt start yet

///////// CUSTOM STYLE /////////
  const [dataLoaded, setDataLoaded] = useState(false); // for font

  if (!dataLoaded){ // loading component, takes startAsync
    return ( 
    <AppLoading  
          startAsync={fetchFonts} 
          onFinish={()=> setDataLoaded(true)}
          onError={(err)=>console.log(err)}
          />
    )} // onFinish will be executed when startAsync is done(promise fullfiled)

// added -> fontFamily: 'open-sans-bold' to <StartGameScreen>
// installed -> expo install expo-font

  const configureNewgameHandler = () => {  // runs <StartGameScreen/>
    setGuessRounds(0); // else if statement not meet (guessRounds > 0)
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);  // setting guessRounds to 0 on start game
  }

  const gameOverHandler = numOfRounds => { // we want to show this if guessRounds is > 0
    setGuessRounds(numOfRounds);
  }

// first component to show:
// after the button in this component is pressed and userNumber SET, then <Card> components shows to start game onPress
// <Card> gets props sent (from here) onStartGame={configureNewgameHandler} 
// that setUserNumber(null) inside configureNewgameHandler to one selected (<Card>(onPress={()=> props.onStartGame(selectedNumber))
// content then changes value
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

// changed value determines which component from these two will be show now
// since from <Card> userNumber and guessRounds have value then the game starts <GameScreen>
// <GameScreen> has the logic for gameplay
// else it just shows <GameOverScreen> with game info and onPress newGame function
  if (userNumber && guessRounds <= 0){ // component switcher 
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/> 
  } else if (guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumb={userNumber} onStartGame={configureNewgameHandler}/>
  }

  return (
    <ImageBackground  source={require('./assets/native.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.screen}>
      <Header title={'Guess A Number'}/>
      {content}
    </View>
    </ImageBackground>        

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
