import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheetProperties } from 'react-native'
import arrow from '../../../../assets/icons/arrow.png'

interface Props {
    styles?: StyleProp<ImageStyle>,
}

const Arrow: React.FC<Props> = ({ styles }) => <Image style={styles} source={arrow} />

export default Arrow
