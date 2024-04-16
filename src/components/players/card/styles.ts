import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',  
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E9',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 4,
    borderRadius: 10
  },
  content: {
    flex: 1,
    padding: 5,
  },
  nome: {
    fontSize: 15,
    lineHeight: 18,
    color: '#3D434D',
    fontWeight: 'bold',
  },
  sobrenome: {
    fontSize: 15,
    lineHeight: 18,
    color: '#3D434D',
    fontWeight: 'bold',
  },
  email: {
    color: '#191970',
    fontSize: 13,
  },
  ender: {
    color: '#888D97',
    fontSize: 13,
  },
  user: {
    color: '#888D97',
    fontSize: 13,
  },
  password: {
    color: '#1967FB',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    height: 80,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E3E3E3',
  }
});
