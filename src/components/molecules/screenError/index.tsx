import React from 'react'
import { Text, View } from 'react-native'
import loader from './animation.json'
import LottieView from 'lottie-react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const ScreenError = ({ 
    msg = 'We\'re sorry, there was an internal error',
    btnMsg = 'Try to reconnect',
    callback = () => {}
}) => {
    return (
        <View style={styles.container}>
            <LottieView source={loader} autoPlay loop style={styles.loader} />
            <Text style={styles.msg}>{msg}</Text>
            <RectButton style={styles.btn} onPress={callback}>
                <Text>{btnMsg}</Text>
            </RectButton>
        </View>
    )
}

export default ScreenError
