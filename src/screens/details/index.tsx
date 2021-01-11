import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'
import { INews } from '../../types/responses'
import { getHeight, getWidth } from '../../utils/helpers'
import { ScrollView } from 'react-native-gesture-handler'
import Tags from '../../components/atoms/tags'

interface Props {
    navigation: StackNavigationProp<any>
    route: RouteProp<any, any> | { params: INews } 
}

const Details: React.FC<Props> = ({ route }) => {
    const data = route.params

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ 
                    uri: data?.image_url,
                    cache: 'force-cache',
                    width: getWidth() * 0.9,
                    height: getHeight() * 0.2
                }}
                style={styles.mainImage}
            />
            <Text style={styles.heading}>
                {data?.title}
            </Text>
            <Text style={styles.body}>
                {data?.content}
            </Text>
            <View style={styles.bottomDetails}>
                <Text style={styles.authors}><Text style={styles.strong}>Authors: </Text>{data?.authors}</Text>
                <Text style={styles.authors}><Text style={styles.strong}>Source: </Text>{data?.website}, {data?.date}</Text>
                <Tags newStyle={styles.tags} tags={data?.tags} />
            </View>
        </ScrollView>
    )
}

export default Details