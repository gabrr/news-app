import { AxiosResponse } from 'axios';
import api from '../api'
import { INews } from "../types/responses";


export const getNewsPosts = async (): Promise<{ data: INews[], error: boolean } | { error: true, data: [] }> => {
    try {
        const response: AxiosResponse = await api.get('challenge/')
        return { error: false, data: response.data }    
    } catch (error) {
        console.error(error)
        return { error: true, data: [] }
    }
}