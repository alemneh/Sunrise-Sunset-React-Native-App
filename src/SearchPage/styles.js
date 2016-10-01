import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  discription: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'Cochin'
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
    alignSelf: 'center',
    fontFamily: 'Times'
  },
  image: {
    width: 400,
    height: 300,
    marginTop: 64
  }
});
