import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },

  loginForm: {
    marginTop: 45,
    width: '100%',
  },

  formField: {
    marginBottom: 27,
  },

  label: {
    fontWeight: '300',
    fontSize: 14,
  },

  emailField: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.2)',
    height: 25,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 28,
  },

  passwordField: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.2)',
    height: 25,
    marginTop: 8,
    fontSize: 14,
  },

  loginButton: {
    width: 328,
    height: 56,
    backgroundColor: '#4A2787',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 32,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 26,
  },
});

export default styles;
