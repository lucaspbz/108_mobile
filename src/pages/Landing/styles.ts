import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' },

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
    marginTop: 24,
  },

  registerButton: {
    backgroundColor: '#4DACD1',
    width: 296,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: 'bold',
  },

  alreadyRegisteredButton: {
    marginTop: 25,
  },

  alreadyRegisteredButtonText: {
    color: '#4DACD1',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 26,
  },
});

export default styles;
