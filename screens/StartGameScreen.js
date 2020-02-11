import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {

    const [enteredValue,setEnteredvalue] = useState('');

    const changeText = newNumb => {
        setEnteredvalue(newNumb.replace(/[^0-9]/g, '')) // non numberical number drop
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
                        <Button title='Confirm' onPress={()=> {}}/>
                    </View>
                    <View style={styles.button} >
                        <Button title='Reset' onPress={()=> {}} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
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
