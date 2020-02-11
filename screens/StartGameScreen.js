import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


const StartGameScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonStyle}>
                    <Button title='Confirm' onPress={()=> {}}/>
                    <Button title='Reset' onPress={()=> {}}/>
                </View>
            </View>
        </View>
    )





}

const styles = StyleSheet.create({
  screen: {
    flex: 1,          // takes all space below Header
    padding: 10,
    alignItems: 'center',
  },
  buttonStyle: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',            // width according to parent
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
  }
});

export default StartGameScreen;
