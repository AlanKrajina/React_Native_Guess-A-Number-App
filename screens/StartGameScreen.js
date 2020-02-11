import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
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
  }
});

export default StartGameScreen;
