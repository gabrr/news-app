import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const HeaderButton = ({ action }: any) => {
    return (
        <View style={styles.button} onTouchStart={action}>
            <Text style={styles.text}>Sort</Text>
        </View>
    )
}

export default HeaderButton
