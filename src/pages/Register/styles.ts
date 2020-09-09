import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  loginForm: {
    width: '100%',
    marginTop: 48,
    flex: 1,
  },

  formField: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 24,
  },

  label: {
    maxWidth: 80,
  },

  genericField: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(51, 51, 51, 0.2)',
    width: 240,
    textAlign: 'center',
  },

  formFieldSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  picker: { width: '80%' },

  registerButton: {
    marginBottom: 40,
  },

  registerButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
