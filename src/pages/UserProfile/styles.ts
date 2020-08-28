import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  goBackIcon: {
    position: 'absolute',
    top: 24,
    left: 24,
  },

  userName: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333333',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 120,
    marginTop: 56,
    textAlign: 'right',
  },

  avatarContainer: {
    position: 'absolute',
    top: 36,
    right: 36,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },

  editIcon: {
    backgroundColor: '#4DACD1',
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: -5,
    right: -5,
  },

  wellcomeText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
    alignSelf: 'flex-start',
    marginTop: 24,
    marginLeft: 40,
    marginBottom: 16,
    height: 80,
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
    backgroundColor: '#F7FAFB',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  itemCard: {
    width: 328,
    height: 153,
    backgroundColor: '#D3E3E9',
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

  date: {
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16,
    color: '#333333',
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
});

export default styles;
