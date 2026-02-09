const IMAGE_EXTENSION = 'png'

export function getSetLogoUrl(url: string): string {
    return `${url}.${IMAGE_EXTENSION}`
}
