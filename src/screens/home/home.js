import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import EventScroller from '../../components/reusable/EventScroller/EventScroller'; 
import useYelpSearch from '../../hooks/useResults'; 

const Home = () => {
  const [term, setTerm] = useState(''); 
  const [searchApi, results, errorMessage] = useYelpSearch(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Local Events</Text>

      </View> 
        <Text style={styles.textStyle}>Find the Best Events</Text>
       <View> 
         <SearchBar term={term} onTermChange={setTerm} 
         onTermSubmit={() => searchApi(term)}/> 
         <View style={styles.scrollStyle}> 
            <EventScroller results={results} />  
        </View>
       </View>
    </View> 
  )
} 

export default Home 

const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop: 25, 
        padding: 15, 
    }, 
    scrollStyle: {
      marginTop: 5,
      marginBottom: 100, 
      marginRight: 5 
    }, 
    header: {
        padding:2,
        flexDirection: "row", 
        justifyContent: "space-between",  
    }, 
    textStyle: {
        alignSelf: 'center', 
        marginTop: 10
    }  
}) 