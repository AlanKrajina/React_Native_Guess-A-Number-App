import React, {useState, useRef, useEffect} from 'react'; // useEffect allows to run logic after render cycle
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude) // recursion
    } else {
        return rndNum;
    }
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // props destructuring:
    const { userChoice, onGameOver} = props;

    useEffect(()=> {         // runs after every render cycle, when it finishes checking lower and greater
        if (currentGuess === userChoice){ // whenever this values changes if statement will re-run
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver]); // second argument is an array of dependencies, any value outside useEffect func
                          // if value do not change after render cycle then it wont re run 
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Wrong Hint!', 'You know this is wrong :)',
            [{text: 'Try Again', style: 'cancel'}]);
            return;
        } 
        if (direction === 'lower'){
            currentHigh.current = currentGuess;  // if number comp guessed too big and it should guess a lower one then the guessed number is CURRENT HIGH
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1) // increments rounds state
    };

    // lower and greater is mine choice
    // useRef defines value that survives when this component get built

    return (
        <View style={styles.screen}>
            <Text style={{fontFamily: 'monospace',color: '#F5FFFA'}}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title= 'LOWER' onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title= 'GREATER' onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
})

export default GameScreen;
