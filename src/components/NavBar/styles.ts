import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 32,
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },

  tabItems: {
    marginTop: 36,
  },

  tabItemsText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
  },

  activeText: {
    fontWeight: 'bold',
  },

  activeBar: {
    backgroundColor: '#249CC9',
    width: 36,
    height: 5,
    alignSelf: 'center',
    marginTop: 8,
  },
});

export default styles;
