import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>User Number: {props.userNumb}</Text>
            <Button title='Reset Game' onPress={props.onStartGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default GameOverScreen;