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

class TimeResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sunRise: this.props.time.sunrise,
      sunSet: this.props.time.sunset
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeBlk}>
          <Text style={styles.discription}>Sun Rise is at:</Text>
          <Text style={styles.time}>{this.state.sunRise}</Text>
        </View>
        <View style={[styles.timeBlk, {backgroundColor: 'black'}]}>
          <Text style={styles.discription}>Sun Set is at:</Text>
          <Text style={styles.time}>{this.state.sunSet}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  timeBlk: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 64
  },
  discription: {
    marginTop: 100,
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
  },
  time: {
    color: 'yellow',
    textAlign: 'center'
  }
});

export default TimeResults;
