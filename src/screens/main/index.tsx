import React, { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { GlanceRow } from '../../components/molecules'
import { getNewsPosts } from '../../services/getNewsPosts'
import { INews } from '../../types/responses'
import styles from './styles'


const Main = () => {
    const [news, setnews] = useState<INews[]>([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getNewsPosts()
            .then(({ data }) => {
                setnews(data)
                setloading(false)
            })
            .catch(console.error)
    }, [])

    console.log(news, 'newsss')

    return (
        <>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
            <SafeAreaView style={styles.container}>
                {loading ? <Text>Loading</Text> : 
                    <ScrollView style={styles.scrollContainer}>
                        { news.map((newsData, index) => <GlanceRow key={index} data={newsData} />)}
                    </ScrollView>
                }
            </SafeAreaView>        
        </>
    )
}

export default Main