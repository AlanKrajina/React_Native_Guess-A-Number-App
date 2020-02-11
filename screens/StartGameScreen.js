import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {

    const [enteredValue,setEnteredvalue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();

    const changeText = newNumb => {
        setEnteredvalue(newNumb.replace(/[^0-9]/g, '')) // non numberical number drop
    }

    const resetValue = () => {
        setEnteredvalue('');
        setConfirmed(false)
    }

    const confirmValue = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return; // if the value is invalid like here, return stops executing 3 functions bellow
        }           // only numbers between 0-99, and no invalid numbers
        setConfirmed(true);  // changes confirmed state
        setSelectedNumber(parseInt(chosenNumber))
        setEnteredvalue('');
    }

    let confirmedOutput;   // number for checking 

    if (confirmed){   // if number OK via confirmValue(), confirmed === true
    confirmedOutput= <Text>Chosen Number: {selectedNumber}</Text> // this will be outputed to screen
    }



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss() // on empty space press keyboard removed
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.txt}>Select a Number</Text>
                <Input 
                   numbChanger={changeText}
                   text={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title='Confirm' onPress={confirmValue}/>
                    </View>
                    <View style={styles.button} >
                        <Button title='Reset' onPress={resetValue} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,          // takes all space below Header
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '80%',            // width according to parent
    justifyContent: 'space-between'
  },
  inputContainer: { 
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
      fontSize: 20,
      marginVertical: 10
  },
  button: {
      width: 80
  },
  txt: {
    fontFamily: 'monospace'
  }
});

export default StartGameScreen;
