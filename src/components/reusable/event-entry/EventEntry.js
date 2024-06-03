import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';

const EventEntry = ({ result }) => { 
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }}/> 
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.nameStyle}>{result.name}</Text> 
          <Text style={styles.ratingStyle}>{result.rating}</Text> 
        </View>
        <Text style={styles.descriptionStyle}>{result.location.address1}</Text> 
      </View>
    </View>
  )
}

export default EventEntry;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    padding: 5, 
  },  
  infoContainer: {
    flex: 1,
    marginLeft: 10, 
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  imgStyle: {
    height: 200, 
    width: 200, 
  }, 
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingStyle: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 10,
  },
  descriptionStyle: {
    fontSize: 14,
    color: 'black',
    marginTop: 10, 
  },
}); 