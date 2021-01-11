import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { INews } from '../../../types/responses'
import { getWidth } from '../../../utils/helpers'
import { Arrow } from '../../atoms'
import { getTheThreeFirstNames, maxTitleCharacters } from './helpers'
import styles from './styles'

const GlanceRow: React.FC<{ data: INews }> = ({ data }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[styles.bottomBoder, styles.row, styles.rowContainer]}>
                <Image
                    source={{ 
                        uri: data.image_url,
                        cache: 'force-cache',
                        width: getWidth() * 0.12,
                        height: getWidth() * 0.12
                    }}
                    style={styles.avatarIcon}
                />
                <View style={styles.column}>
                    <View style={[styles.row, styles.headerRow]}>
                        <Text style={styles.header}>{maxTitleCharacters(data.title)}</Text>
                        <Arrow styles={styles.iconIndicator} />
                    </View>
                    <View style={[styles.row, styles.detailsRow]}>
                        <Text style={styles.authors}>{getTheThreeFirstNames(data.authors)}</Text>
                        <Text style={styles.date}>{data.date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default GlanceRow