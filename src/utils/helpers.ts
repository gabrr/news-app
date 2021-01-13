import { Dimensions } from "react-native"

export const getWidth = () => Dimensions.get('window').width
export const getHeight = () => Dimensions.get('window').height
export const spinalCase = (str: string) => str.split(/(?=[A-Z])|[_]|[\s]/).join('-').toLowerCase()
