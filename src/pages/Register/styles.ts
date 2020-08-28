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
    marginTop: 24,
    flex: 1,
  },

  formField: {
    marginBottom: 8,
  },

  label: {},

  genericField: {},

  secretField: {},

  formFieldSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  picker: { width: '80%' },

  registerButton: {
    backgroundColor: '#249CC9',
    width: 300,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },

  registerButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
