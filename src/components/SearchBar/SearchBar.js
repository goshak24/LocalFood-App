import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => { 
    return (
     <View style={styles.container}>
        <TextInput style={styles.textStyle}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        /> 
    </View>
  )
} 

export default SearchBar

const styles = StyleSheet.create({
    container: {
        height: 50, 
        borderColor: 'orange', 
        borderWidth: 2, 
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20  
    }, 
    textStyle: {
        fontSize: 24
    } 
}) 