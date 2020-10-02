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

  label: {
    maxWidth: 80,
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
});

export default styles;
