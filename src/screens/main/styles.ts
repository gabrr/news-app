import { getHeight } from './../../utils/helpers';
import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND
    },
    scrollContainer: { height: getHeight() }
})