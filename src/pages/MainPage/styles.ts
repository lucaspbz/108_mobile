import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textContainer: {
    backgroundColor: '#F7FAFB',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flex: 1,
  },

  body: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: 36,
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
    color: '#249CC9',
  },
});

export default styles;
