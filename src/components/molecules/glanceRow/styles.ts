import { getWidth } from './../../../utils/helpers';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';


export default StyleSheet.create({
    container: {
        height: 100,
        width: getWidth(),
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 26,
        backgroundColor: Colors.BACKGROUND,
    },
    column: {
        flexDirection: 'column',
    },
    avatarIcon: {
        borderRadius: 45,
    },
    row: {
        flexDirection: 'row',
    },
    rowContainer: {
        width: getWidth() - 26,
    },
    headerRow: {
        justifyContent: 'space-between',
        marginLeft: 12,
        width: getWidth() * 0.78,
        marginBottom: 4,
    },
    detailsRow: {
        justifyContent: 'space-between',
        marginLeft: 12,
    },
    header: {
        fontWeight: '700',
        width: getWidth() * 0.60,
        fontSize: 16,
        color: Colors.BLACK,
        flexWrap: 'wrap',
        lineHeight: 22,
    },
    iconIndicator: {
        height: 17,
        width: 17,
        marginRight: getWidth() * 0.01,
        zIndex: 4,
    },
    bottomBoder: {
        borderBottomColor: Colors.BOTTOM_BAR,
        borderBottomWidth: 1
    },
    fadedColor: {
        color: Colors.FADED,
    },
    date: {
        color: Colors.FADED,
        marginRight: getWidth() * 0.02,
    },
    authors: {
        color: Colors.FADED,
        
    },
    leftAction: {
        backgroundColor: Colors.BACKGROUND,
        justifyContent: 'center'
    },
    leftActionText: {
        marginLeft: getWidth() * 0.05,
        marginRight: getWidth() * 0.05,
    },
    titleRead: {
        color: Colors.FADED,
        fontWeight: '400',
    },
    titleUnread: {
        color: Colors.BLACK,
        fontWeight: '700',
    }
})