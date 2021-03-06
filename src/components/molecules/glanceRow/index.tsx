// styles
import styles from './styles'
// libraries
import React, { useRef } from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
// types
import { NewsParsed } from '../../../screens/main'
// functions
import { getWidth } from '../../../utils/helpers'
import { getTheThreeFirstNames, maxTitleCharacters } from './helpers'
// components
import { Arrow } from '../../atoms'

interface Props {
    data: NewsParsed
    onPress?: () => any
    markReadUnread: (id: any, toggle?: boolean) => any
}

const GlanceRow: React.FC<Props> = ({ data, onPress, markReadUnread }) => {

    const { id, isRead } = data

    const rowRef = useRef<Swipeable>(null)

    const LeftAction = () => 
        <RectButton style={styles.leftAction} onPress={() => {
                markReadUnread(id)
                rowRef?.current?.close()
            }}
        >
            <Text style={styles.leftActionText}>
                {!isRead ? 'Mark as Read' : 'Mark as Unread'}
            </Text>
        </RectButton>

    return (
        <Swipeable
            ref={rowRef}
            renderLeftActions={LeftAction}
        >
            <TouchableOpacity style={styles.container} onPress={onPress}>
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
                            <Text style={[styles.header, isRead ? styles.titleRead : styles.titleUnread]}>
                                {maxTitleCharacters(data.title)}
                            </Text>
                            <Arrow styles={styles.iconIndicator} />
                        </View>
                        <View style={[styles.row, styles.detailsRow]}>
                            <Text style={styles.authors}>{getTheThreeFirstNames(data.authors)}</Text>
                            <Text style={styles.date}>{data.date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default GlanceRow