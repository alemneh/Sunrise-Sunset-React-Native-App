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
import styles from './styles';

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
        <View style={styles.sunRiseBlk}>
          <Text style={styles.discription}>Sun Rise is at:</Text>
          <Text style={styles.time}>{this.state.sunRise}</Text>
        </View>
        <View style={styles.sunSetBlk}>
          <Text style={styles.discription}>Sun Set is at:</Text>
          <Text style={styles.time}>{this.state.sunSet}</Text>
        </View>
      </View>
    );
  }
}


export default TimeResults;
