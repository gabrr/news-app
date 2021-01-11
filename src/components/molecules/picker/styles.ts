import { getWidth, getHeight } from './../../../utils/helpers';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
    picker: {
        width: getWidth() * 0.95,
        left: getWidth() * 0.025,
        bottom: 30,
    }
})
