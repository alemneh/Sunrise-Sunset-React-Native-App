import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.discription}>
          Find out what time is the next Sunset or Sunrise in your city.
        </Text>
        <Text style={styles.discription}>
          Enter your location
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}/>
          <TouchableHighlight
            style={styles.button}
            underlayColor='green'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  discription: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'yellow'
  },
  searchInput: {
    height: 36,
    padding: 4,
    flex: 4,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    borderColor: 'green',
    color: 'blue'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
});


export default SearchPage;
