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
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    };
  }

  onSearchPressed() {
    console.log('Clicked');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../sunset.jpg')} style={styles.image} />
        <Text style={styles.discription}>
          Find out what time is the next Sunset or Sunrise in your city.
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#00ffff'
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Sun Rise</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#00ffff'
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Sun Set</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black'
  },
  discription: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue'
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
    margin: 10,
    height: 66,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 50
  },
  buttonText: {
    fontSize: 18,
    color: 'yellow',
    alignSelf: 'center'
  },
  image: {
    width: 400,
    height: 300
  }
});


export default SearchPage;
