import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingTop: 12,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomColor: '#373737',
        borderBottomWidth: 1,
        backgroundColor: '#222222',
    },
    switchTitle: {
        flex: 1,
        fontSize: 16,
        color: 'white',
    },
    pickerContainer: {
        marginTop: 12,
        padding: 12,
        borderBottomColor: '#373737',
        borderBottomWidth: 1,
        backgroundColor: '#222222',
    },
    picker: {
        color: 'white',
    },
    totalDurationText: {
        alignSelf: 'center',
        padding: 12,
        fontSize: 12,
        color: '#a5a5a5',
    },
    text: {
        padding: 12,
        fontSize: 12,
        color: '#a5a5a5',
    },
    tabsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    tab: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
        minWidth: 78,
        textAlign: 'center',
        borderWidth: 1,
        color: 'white',
        borderColor: '#F06292',
    },
})