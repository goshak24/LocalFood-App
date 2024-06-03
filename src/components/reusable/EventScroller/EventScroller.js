import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'; 
import EventEntry from '../event-entry/EventEntry'; 

const EventScroller = ({ results }) => { 
  return (
    <View style={styles.container}>
       <FlatList style={{marginBottom: 10}}
        horizontal={false}
        data={results}
        showsVerticalScrollIndicator={false} 
        keyExtractor={(result) => results.id} 
        renderItem={({ item }) => {
          return <EventEntry result={item} />
        }} 
       />
    </View>
  )
} 

export default EventScroller 

const styles = StyleSheet.create({
  container: {
  } 
}) 