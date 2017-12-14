import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    listSeparator: {
        flexDirection: 'row',
    },
    listSeparatorLeft: {
        width: 27,
        height: 1,
        backgroundColor: '#222222',
    },
    listSeparatorRight: {
        flex: 1,
        height: 1,
        backgroundColor: '#373737',
    },
    itemContainer: {
        backgroundColor: '#222222',
        flexDirection: 'row',
        minHeight: 64,
        padding: 12,
    },
    itemView: {
        width: 3,
        backgroundColor: '#F06292',
    },
    itemImage: {
        height: 64,
        width: 64,
        marginLeft: 12,
        marginRight: 12,
    },
    itemTextContainer: {
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 16,
        color: 'white',
    },
    itemDescription: {
        fontSize: 12,
        color: 'grey',
    },
})