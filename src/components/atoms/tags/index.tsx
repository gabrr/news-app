import React from 'react'
import { StyleProp, StyleSheet, StyleSheetProperties, Text, View, ViewStyle } from 'react-native'
import { styles } from './styles'

interface Props {
    tags: {
        id: number,
        label: string
    }[],
    newStyle?: ViewStyle
}

const Tags: React.FC<Props> = ({ tags, newStyle }) => {
    return (
        <View style={[styles.container, newStyle]}>
            {tags.map(tag => (
                <View key={tag.id} style={styles.tag}>
                    <Text style={styles.text}>
                        {tag.label}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default Tags