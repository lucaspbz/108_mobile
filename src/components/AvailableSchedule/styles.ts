import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDEDED',
    paddingTop: 16,
    width: '100%',
  },

  scheduleItem: {
    backgroundColor: '#8739B3',
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
    marginHorizontal: 8,
  },

  selectedItem: {
    backgroundColor: '#EDEDED',
    borderWidth: 2.5,
    borderColor: '#8739B3',
  },

  selectedItemText: {
    color: '#8739B3',
  },

  itemTitle: {
    marginLeft: 8,
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
  },

  button: {
    marginTop: 16,
    marginBottom: 32,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 26,
  },

  dayTitleContainer: {
    flexDirection: 'row',
    marginLeft: 32,
    marginVertical: 8,
  },
});

export default styles;
