import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },

  main: {
    backgroundColor: '#EDEDED',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flex: 1,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default styles;
