import React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

const GameOverScreen = props => {

    return (
        <ImageBackground  source={require('../assets/success.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.screen}>
                <View style={styles.gameOver}>
                    <Text style={styles.txt}>That's the Number!</Text>
                    <Text style={styles.txt}>Game Over</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.txt2}>Number of Rounds</Text>
                    <Text style={styles.numbs}>{props.roundsNumber}</Text>
                    <Text style={styles.txt2}>User Number</Text>
                    <Text style={styles.numbs}>{props.userNumb}</Text>
                <Button title='Reset Game' onPress={props.onStartGame}/>
                </View>
            </View>
        </ImageBackground>        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
    gameOver: {
        borderColor: 'black', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#1E90FF',
        marginBottom: '40%',
        alignItems: 'center'
    }, txt: {
        color: '#F5FFFA',
        fontSize: 25,
        fontFamily: 'Roboto',
    },
    infoBox: {
        textAlign: 'center',
        alignItems: 'center',
    },
    numbs: {
        fontSize: 30,
        color: '#0000CD',
    },
    txt2: {
        fontFamily: 'monospace'
    }
})

export default GameOverScreen;