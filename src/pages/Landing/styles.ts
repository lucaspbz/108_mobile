import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },

  textBold: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#333333',
  },

  wellcomeText: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: '#333333',
  },

  banner: {
    marginTop: 8,
    width: '100%',
    resizeMode: 'contain',
  },

  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },

  alreadyRegisteredButton: {
    marginTop: 25,
  },

  alreadyRegisteredButtonText: {
    color: '#4A2787',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 26,
  },
});

export default styles;
