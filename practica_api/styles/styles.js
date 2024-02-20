import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#84b6f4',
        alignItems: 'center',
        paddingTop: 49,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'darkblue', 
      },
      filters: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      input: {
        padding: 18,
        marginHorizontal: 15,
        fontSize: 13,
        borderColor: 'gainsboro',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        backgroundColor: '#b0c2f2',
        color: 'black', 
      },
      charactersContainer: {
        alignItems: 'center',
        backgroundColor: '#ffe4e1', 
        padding: 20, 
        borderRadius: 10, 
      },
      
});

export default styles;