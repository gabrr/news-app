import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import styles from './styles'


const Main = () => {
    return (
        <>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
        />
            <SafeAreaView style={styles.container}>

            </SafeAreaView>        
        </>
    )
}

export default Main