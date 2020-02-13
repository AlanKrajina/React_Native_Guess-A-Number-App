import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


const Input = props => {

    return (
            <TextInput 
                style = {styles.textStyle}
                keyboardType = 'number-pad' // for dots, only works for iOS
                maxLength = {2}
                onChangeText={props.numbChanger}
                value={props.text}
            />
    )
}

const styles = StyleSheet.create({
textStyle: {
  width: 60, 
  borderColor: 'black', 
  borderWidth: 1,
  borderRadius: 5,
  margin: 10,
  textAlign: 'center',
  backgroundColor: '#87CEFA',
}
});

export default Input;
