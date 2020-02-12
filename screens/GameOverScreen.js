import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
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