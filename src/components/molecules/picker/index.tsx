import styles from "./styles";
import React from 'react'
import { Picker as Pk } from '@react-native-picker/picker';
import { SORT_OPTIONS } from "../../../constants";
import { View } from "react-native";

const Picker: React.FC<any> = ({ show = true }) => {
    return (
        <View style={[{ display: show ? 'flex' : 'none' }]}>
            <Pk
                selectedValue={'java'}
                style={styles.picker}
                onValueChange={() => {}}
            >
                {SORT_OPTIONS.map(option => <Pk.Item key={option} label={option} value={option} />)}
            </Pk>
        </View>
    )
}

export default Picker
