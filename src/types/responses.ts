export interface INews {
    "title": string
    "website": string
    "authors": string
    "date": string,
    "content": string
    "tags": {
        "id": number,
        "label": string
    }[],
    "image_url": string
}