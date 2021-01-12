import { sortNews } from "../helpers"
import { news, newsSortedByAuthor, newsSortedByDate, newsSortedByTitle } from "../mocks"

export {}

test('Sort by Authors', () => {
    expect(sortNews(news, 'Authors')).toEqual(newsSortedByAuthor)
})

test('Sort by Date', () => {
    expect(sortNews(news, 'Date')).toEqual(newsSortedByDate)
})

test('Sort by Title', () => {
    expect(sortNews(news, 'Title')).toEqual(newsSortedByTitle)
})