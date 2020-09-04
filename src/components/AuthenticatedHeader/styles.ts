import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(202, 83, 215, 0.6)',
    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  userName: { position: 'absolute', top: 18, right: 18 },

  userNameText: {
    color: '#4A2787',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'right',
  },

  title: {
    fontSize: 32,
    lineHeight: 37,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 48,
    marginTop: 64,
  },

  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});

export default styles;
