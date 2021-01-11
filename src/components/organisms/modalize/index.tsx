import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Modalize } from "react-native-modalize";
import { Picker } from '../../molecules';
import styles from './styles';

interface Props { 
    ownRef: any
    pickerValue: any
    setpickerValue: any
}
const Modal: React.FC<Props> = ({ ownRef, pickerValue, setpickerValue, }) => {



    return (
        <Modalize
            ref={ownRef}
            modalHeight={400}
        >
            <Text style={styles.heading}>Sort by</Text>
            <Picker {...{ pickerValue, setpickerValue }} />
        </Modalize>
    )
}

export default Modal
