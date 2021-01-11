// styles
import styles from './styles'
// libraries
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler'
// components
import { GlanceRow, Picker } from '../../components/molecules'
import { HeaderButton } from '../../components/atoms'
import { Modalize } from '../../components/organisms'
// types
import { INews } from '../../types/responses'
import { Modalize as IModalize} from 'react-native-modalize'
// functions
import { getNewsPosts } from '../../services/getNewsPosts'


interface Props {
    navigation: StackNavigationProp<any>
    route: RouteProp<any, any>
    modalizeRef: any
}

const Main: React.FC<Props> = ({ navigation, route }) => {
    const [news, setnews] = useState<INews[]>([])
    const [loading, setloading] = useState(true)
    const [showPicker, setshowPicker] = useState(false)
    const [pickerValue, setpickerValue] = useState('')

    const togglePicker = () => setshowPicker(!showPicker)

    const modalizeRef = useRef<IModalize>()
    const onOpen = () => modalizeRef.current?.open()

    console.log(modalizeRef, 'moda')

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderButton action={onOpen} />,
        })
    }, [])

    useEffect(() => {
        getNewsPosts()
            .then(({ data }) => {
                setnews(data)
                setloading(false)
            })
            .catch(err => {
                console.error(err)
                setloading(false)
                setnews([])
            })
    }, [])

    

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
                        { news.map((newsData, index) => 
                            <GlanceRow
                                key={index}
                                data={newsData}
                                onPress={() => navigation.navigate('Details', newsData )}
                            />
                        )}
                    </ScrollView>
                }
                <Modalize {...{ pickerValue, setpickerValue, ownRef: modalizeRef }} />
            </SafeAreaView>
        </>
    )
}

export default Main