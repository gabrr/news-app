// styles
import styles from './styles';
// libraries
import React from 'react'
import { Text } from 'react-native'
import { Modalize } from "react-native-modalize";
// compoents
import { Picker } from '../../molecules';

interface Props { 
    ownRef: any
    modalHeight?: number
    title: string
}

const Modal: React.FC<Props> = ({ ownRef, children, title, modalHeight = 400 }) => 
    <Modalize ref={ownRef} modalHeight={modalHeight}>
        <Text style={styles.heading}>{title}</Text>
        {children}
    </Modalize>

export default Modal
