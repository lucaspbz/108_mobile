import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textContainer: {
    backgroundColor: '#EDEDED',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flex: 1,
  },

  scrollview: {
    margin: 16,
    marginBottom: 24,
  },

  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
    color: '#333333',
  },

  bold: {
    fontWeight: 'bold',
    color: '#CA53D7',
  },
});

export default styles;
