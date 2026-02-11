const IMAGE_QUALITY = 'low'
const IMAGE_EXTENSION = 'png'

export function getCardImageUrl(url: string): string {
    return `${url}/${IMAGE_QUALITY}.${IMAGE_EXTENSION}`
}
