import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  grayText: {
    color: '#91A6A7',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
  },
  cancelLink: {
    marginTop: 6,
    color: '#1D9EE2',
  },
});
