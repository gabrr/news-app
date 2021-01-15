import React from 'react'
import { View } from 'react-native'
import loader from './animation.json'
import LottieView from 'lottie-react-native';
import styles from './styles';

const ScreenLoader = () => {
    return (
        <View style={styles.container}>
            <LottieView source={loader} autoPlay loop style={styles.loader} />
        </View>
    )
}

export default ScreenLoader
