import React, {useState} from 'react';
import { StyleSheet, View, Text, Alert, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

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
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert(       // imported Alert for failed validation pop up
                'Invalid number!', 
                'Number has to be a number between 1 and 99.', 
                [{text: 'Okay', style: 'destructive', onPress: resetValue}])
            return; // if the value is invalid like here, return stops executing 3 functions bellow
        }           // only numbers between 1-99, and no invalid numbers
        setConfirmed(true);  // changes confirmed state
        setSelectedNumber(parseInt(chosenNumber))
        setEnteredvalue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;   // number for checking 

    if (confirmed){   // if number OK via confirmValue(), confirmed === true
    confirmedOutput = 
    <Card style={styles.summaryContainer}>
        <Text style={{fontFamily: 'monospace',color: '#F5FFFA', }}>You selected</Text> 
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Start Game' onPress={()=> props.onStartGame(selectedNumber)}/>
    </Card>
    }



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss() // on empty space press keyboard removed
        }}>
        <View style={styles.screen}>
            <Text style={styles.subTitle,{fontFamily: 'monospace'}}>Game Info</Text>
            <Text style={styles.subTitle}>Player selects a number between 1-99. App tries to guess what number Player selected while Player gives hints if the number is Lower or Greater.</Text>
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
    alignItems: 'center'
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
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',

  },
  title: {
      fontSize: 25,
      marginVertical: 10,
      fontFamily: 'Roboto',  // check custom fonts
      color: '#F5FFFA', 
      fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 10,
    marginVertical: 10,
    fontFamily: 'Roboto',  // check custom fonts
    textAlign: 'center',
    color: '#F5FFFA',
  },
  button: {
      width: 80
  },
  txt: {
    fontFamily: 'monospace',
    color: '#F5FFFA',
  },
  summaryContainer: {
      marginTop: 20,
      alignItems: 'center',
  }
});

export default StartGameScreen;
