import { getHeight, getWidth } from './../../../utils/helpers';
import { StyleSheet } from 'react-native'; 
import { Colors } from '../../../styles';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        height: getHeight(),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loader: {
        width: getWidth() * 0.5,
        top: -30,
    }
})