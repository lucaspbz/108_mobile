import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },

  header: {
    backgroundColor: '#A6D8EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 32,
  },
});

export default styles;
