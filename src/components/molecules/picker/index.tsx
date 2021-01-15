import styles from "./styles";
import React from 'react'
import { Picker as Pk } from '@react-native-picker/picker';
import { View } from "react-native";

interface Props {
    value: any
    setValue: any
    options: {
        label: string
        value: string
    }[]
}

const Picker: React.FC<Props> = ({ value, setValue, options }) => {
    return (
        <View>
            <Pk
                selectedValue={value}
                style={styles.picker}
                onValueChange={(value) => setValue(value)}
            >
                {options.map(({ label, value }) => <Pk.Item key={value} {...{ value, label }} />)}
            </Pk>
        </View>
    )
}

export default Picker
