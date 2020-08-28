import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: 36,
  },

  body: {
    flex: 1,
    width: '100%',
  },

  scheduleItem: {
    backgroundColor: '#249CC9',
    height: 40,
    width: 92,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },

  scheduleItemText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 14,
  },

  dayList: {
    flexDirection: 'row',
  },

  selectedItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2.5,
    borderColor: '#249CC9',
  },

  selectedItemText: {
    color: '#249CC9',
  },

  itemTitle: {
    marginLeft: 32,
    color: '#333333',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
  },
});

export default styles;
