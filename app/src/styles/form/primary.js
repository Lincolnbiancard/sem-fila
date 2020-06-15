import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#3498DB',
        borderRadius: 50,
    },
    textButton: {
        color: '#fff',
        fontSize: 13
    },
    link: {
        color: '#2980B9',
        textTransform: 'capitalize',
        fontSize: 13,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#E3E4EB',
        color: '#000',
        borderRadius: 50,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 15,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    label: {
        color: '#555770',
        marginBottom: 5,
        marginLeft: 10
    },
    titleHeader: {
        fontWeight: 'bold',
        color: '#8B8B8B',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10
    },
    select: {
        backgroundColor: '#E3E4EB',
        color: '#000',
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '100%'
    }
})

export default styles