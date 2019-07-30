import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        padding: 30,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    titleAnecdote:{
        padding: 30,
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
    },
    content:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        textAlign: 'justify',
        lineHeight: 30,
        fontSize: 18,
    },
    buttonHome:{
        backgroundColor: '#87CEFA',
        color: 'black',
    }
});

export default Styles