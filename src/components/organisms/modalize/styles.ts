import { getWidth } from './../../../utils/helpers';
import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { FONTS } from "../../../styles/fonts";

export default StyleSheet.create({
    heading: {
        ...FONTS.header2,
        marginLeft: getWidth() * 0.05,
        marginTop: 20,
    }
})