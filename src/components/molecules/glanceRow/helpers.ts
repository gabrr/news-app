export const maxTitleCharacters = (text: string, max = 56) => {
    if (text.length <= max) return text
    return text.slice(0, max - 3) + '...'
}

export const getTheThreeFirstNames = (text: string) => {
    const names: any = text.split(' ')
    if (names.length <= 3) return text
    if (names.length > 3) {
        return names.slice(0, 3).join(' ')
    }    
}