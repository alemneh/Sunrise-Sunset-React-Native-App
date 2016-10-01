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
import TimeResult from '../TimeResult/TimeResult';

function urlForQuery(lat, lng) {
  console.log(lat, lng);
  return 'http://api.sunrise-sunset.org/json?lat='+ lat +'&lng='+ lng +'&formatted=1';
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    };
  }

  _executeQuery(query) {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.results))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        }));
  }

  _handleResponse(response) {
    console.log(response.sunrise);
    this.setState({ isLoading: false, message: '' });
    if(response) {
      this.props.navigator.push({
        title: 'Results',
        component: TimeResult,
        passProps: {time: response}
      })
    }

  }

  onGeoLocationRequest() {
    navigator.geolocation.getCurrentPosition(
      location => {
        let lat = location.coords.latitude;
        let lng = location.coords.longitude;
        let query = urlForQuery(lat, lng);
        this._executeQuery(query);
      },
      error => {
        this.setState({
          message: 'There was a problem with obtaining your location:' + error
        });
      });
  }

  render() {
    let spinner = this.state.isLoading ?
      ( <ActivityIndicator
          size='large' /> ) :
      ( <View/>);
    return (
      <View style={styles.container}>
        <Image source={require('../images/sunset.jpg')} style={styles.image} />
        <Text style={styles.discription}>
          Find out what time is the next Sunset or Sunrise in your city.
        </Text>
        {spinner}
        <Text style={styles.discription}>{this.state.message}</Text>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#00ffff'
            onPress={this.onGeoLocationRequest.bind(this)}>
            <Text ref='SunSet' style={styles.buttonText}>Find Times</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


export default SearchPage;
