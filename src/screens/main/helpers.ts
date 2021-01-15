import { spinalCase } from './../../utils/helpers';
import { INews } from './../../types/responses';

export const sortNews = (news: any, field: 'Date' | 'Title' | 'Authors') => {
    return news.slice().sort((a: { [x: string]: string; }, b: { [x: string]: string; }) => {
        const key: string | 'date' | 'title' | 'authors' = field?.toLocaleLowerCase()

        if (key !== 'date') {
            if (a[key] < b[key]) return -1
            if (a[key] > b[key]) return 1
            return 0
        }
        
        if (a[key] < b[key]) return 1
        if (a[key] > b[key]) return -1
        return 0
        
    })
}

export const parseNews = (news: INews[]) => news.map(item => ({ ...item, isRead: false, id: spinalCase(item.content) }))
