import { getWidth, getHeight } from './../../utils/helpers';
import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
import { FONTS } from '../../styles/fonts';

const LIMIT = { 
    width: getWidth() * 0.9,
    marginLeft: getWidth() * 0.05
}

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        height: getHeight()
    },
    mainImage: {
        resizeMode: 'cover',
        marginLeft: getWidth() * 0.05,
        marginTop: 12,
    },
    heading: {
        ...FONTS.header2,
        ...LIMIT,
        marginTop: 15,
    },
    body: {
        ...FONTS.body,
        ...LIMIT,
        marginTop: 15,
    },
    authors: {
        ...FONTS.body,
        ...LIMIT,
    },
    strong: {
        fontWeight: '600'
    },
    bottomDetails: {
        marginTop: 50,
    },
    tags: {
        marginTop: 12,
        ...LIMIT,
    }
})