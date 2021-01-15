import { setPadding } from './../../../styles';
import { FONTS } from './../../../styles/fonts';
import { getHeight, getWidth } from './../../../utils/helpers';
import { StyleSheet } from 'react-native'; 
import { Colors } from '../../../styles';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        height: getHeight(),
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loader: {
        width: getWidth() * 0.5,
        top: -30,
    },
    msg: {
        ...FONTS.body,
        top: -30,
    },
    btn: {
        ...setPadding(15, 25, 15, 25),
        backgroundColor: Colors.GRAY_LIGHT_1,
        borderRadius: 8,
    }
})