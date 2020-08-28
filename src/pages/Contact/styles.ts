import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  body: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: 36,
  },

  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F7FAFB',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },

  contactsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft: 120,
    marginVertical: 16,
  },

  contactText: {
    marginLeft: 16,
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 16,
    lineHeight: 28,
  },
});

export default styles;
