import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


const Card = props => {

    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
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
  card: { 
    // shadow only works on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //
    elevation: 10,              // default shadow
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  title: {
      fontSize: 20,
      marginVertical: 10
  }
});

export default Card;
