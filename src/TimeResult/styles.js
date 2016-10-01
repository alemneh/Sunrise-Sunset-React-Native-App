import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  sunRiseBlk: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 64,
    borderBottomWidth: 1,
    borderColor: 'blue'
  },
  sunSetBlk: {
    flex: 1,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderColor: 'blue'
  },
  discription: {
    marginTop: 100,
    fontSize: 52,
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  time: {
    color: 'yellow',
    textAlign: 'center',
    fontFamily: 'Times',
    fontSize: 32
  }
});
