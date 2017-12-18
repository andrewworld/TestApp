import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    list: {
        flex: 1,
    },
    listContent: {
        paddingTop: 12,
    },
    listSeparator: {
        flexDirection: 'row',
    },
    listSeparatorLeft: {
        width: 12,
        height: 1,
        backgroundColor: '#222222',
    },
    listSeparatorRight: {
        flex: 1,
        height: 1,
        backgroundColor: '#373737',
    },
    sectionHeader: {
        height: 72,
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#373737',
    },
    sectionHeaderText: {
        fontSize: 12,
        color: '#a5a5a5',
    },
    header: {
        height: 200,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        width: 96,
        height: 96,
    },
    headerText: {
        color: '#F06292',
        fontSize: 12,
        padding: 12,
    },
    itemInput: {
        padding: 12,
        backgroundColor: '#222222',
    },
    itemInputTitle: {
        fontSize: 12,
        color: '#a5a5a5',
    },
    itemInputValue: {
        padding: 0,
        fontSize: 16,
        color: 'white',
    },
    itemButton: {
        padding: 12,
        backgroundColor: '#222222',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemButtonTitle: {
        fontSize: 16,
        color: 'white',
    },
    itemButtonTextContainer: {
        flex: 1,
    },
    itemButtonValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemButtonValueArrow: {
        fontSize: 16,
        color: '#a5a5a5',
        marginLeft: 8,
        marginRight: 8,
    },
    itemButtonValue: {
        color: 'grey',
        fontSize: 12,
    },
    itemButtonArrow: {
        fontSize: 18,
        color: 'white',
    },
})