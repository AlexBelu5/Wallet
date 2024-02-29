import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  amount: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grayText: {
    color: '#91A6A7',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    minHeight: 50,
    maxHeight: '100%',
    width: '100%',
    borderColor: '#91A6A7',
    borderRadius: 5,
    flexShrink: 1,
    borderWidth: 2,
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginVertical: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#249FE0',
    marginBottom: 10,
  },
});
