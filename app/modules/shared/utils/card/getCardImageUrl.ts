const IMAGE_QUALITY = 'high'
const IMAGE_EXTENSION = 'png'

export function getCardImageUrl(url: string): string {
    return `${url}/${IMAGE_QUALITY}.${IMAGE_EXTENSION}`
}
