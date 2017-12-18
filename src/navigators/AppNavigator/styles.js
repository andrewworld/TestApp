import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    cardStyle: {
        backgroundColor: '#111111',
    },
    searchBar: {
        margin: 8,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 13,
        height: 32,
        color: 'white',
        borderRadius: 2,
        backgroundColor: '#454545',
    },
    header: {
        backgroundColor: '#222222',
    },
    headerTitle: {
        fontSize: 18,
        alignSelf: 'center',
    },
    headerPlusButton: {
        marginLeft: 16,
        marginRight: 16,
        color: '#F06292',
        fontSize: 32,
    },
    headerTextButtonNoArrow: {
        color: '#F06292',
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    headerTextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    headerTextButtonText: {
        color: '#F06292',
        fontSize: 16,
        marginRight: 8,
        marginLeft: 8,
    },
    headerTextButtonArrow: {
        color: '#F06292',
        fontSize: 20,
    },
})