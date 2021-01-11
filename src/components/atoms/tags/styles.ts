import { setPadding } from './../../../styles/styles';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tag: {
        borderRadius: 20,
        backgroundColor: Colors.TAG,
        ...setPadding(10, 20, 10, 20),
    },
    text: {
        color: Colors.WHITE,
        fontSize: 14,
    }
})