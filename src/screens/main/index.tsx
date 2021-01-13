// styles
import styles from './styles'
// libraries
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList } from 'react-native-gesture-handler'
// components
import { GlanceRow, Picker } from '../../components/molecules'
import { HeaderButton } from '../../components/atoms'
import { Modalize } from '../../components/organisms'
// types
import { INews } from '../../types/responses'
import { Modalize as IModalize} from 'react-native-modalize'
// functions
import { getNewsPosts } from '../../services/getNewsPosts'
import { SORT_OPTIONS } from '../../constants'
import { parseNews, sortNews } from './helpers'


interface Props {
    navigation: StackNavigationProp<any>
    route: RouteProp<any, any>
    modalizeRef: any
}

export type NewsParsed = INews & { id: string , isRead: boolean }

const Main: React.FC<Props> = ({ navigation, route }) => {
    const [news, setnews] = useState<NewsParsed[]>([])
    const [loading, setloading] = useState(true)
    const [sort, setsort] = useState<'Date' | 'Title' | 'Authors'>('Date')

    const modalizeRef = useRef<IModalize>()
    const onOpen = () => modalizeRef.current?.open()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderButton action={onOpen} />,
        })
    }, [])

    useEffect(() => {
        getNewsPosts()
            .then(({ data }) => {
                setnews(sortNews(parseNews(data), sort))
                setloading(false)
            })
            .catch(err => {
                console.error(err)
                setloading(false)
                setnews([])
            })
    }, [])

    
    useEffect(() => {
        setnews(sortNews(news, sort))
    }, [sort])


    const markReadUnread = (_id: string, toggle = true) => {
        const item = news.filter(({ id }) => id === _id)[0]
        item.isRead = toggle ? !item.isRead : item.isRead = true
        const allOtherNews = news.filter(({ id }) => id !== _id)
        const result = sortNews([item, ...allOtherNews], sort)
        setnews(result)
    }

    const onRowClick = (_id: string, item: any) => {
        navigation.navigate('Details', item)
        markReadUnread(_id, false)
    }

    return (
        <>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
            <SafeAreaView style={styles.container}>
                {loading ? <Text>Loading</Text> : 
                    <FlatList
                        style={styles.scrollContainer}
                        data={news}
                        keyExtractor={(_, index) => `${index}`}
                        renderItem={({ item, index }) => 
                            <GlanceRow
                                markReadUnread={markReadUnread}
                                key={index}
                                data={item}
                                onPress={() => onRowClick(item.id, item)}
                            />}
                    />
                }
                <Modalize {...{ title: 'Sort By', ownRef: modalizeRef }} >
                    <Picker {...{ value: sort, setValue: setsort, options: SORT_OPTIONS }} />
                </Modalize>
            </SafeAreaView>
        </>
    )
}

export default Main