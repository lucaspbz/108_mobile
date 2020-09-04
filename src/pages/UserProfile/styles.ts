import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  header: {
    width: '100%',
    marginBottom: 26,
    marginTop: 26,
    alignItems: 'center',
    flexDirection: 'row',
  },

  goBackIcon: {
    marginHorizontal: 24,
  },

  userName: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333333',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 120,
    textAlign: 'right',
  },

  description: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 35,
    marginBottom: 20,
    color: '#333333',
    fontSize: 18,
    lineHeight: 28,
  },

  list: {
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  itemCard: {
    width: 328,
    height: 153,
    backgroundColor: '#EDEDED',
    borderRadius: 15,
    marginBottom: 24,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },

  date: {
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16,
    color: '#8739B3',
    fontSize: 16,
    lineHeight: 26,
  },

  itemLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 16,
    marginBottom: 24,
  },

  itemHour: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 19,
  },

  logoutContainer: {
    width: '100%',
    marginTop: 16,
  },

  logoutText: {
    marginLeft: 16,
    marginBottom: 56,
    fontSize: 18,
    lineHeight: 28,
  },
});

export default styles;
