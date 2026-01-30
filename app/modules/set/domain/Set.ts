export interface Set {
    id: string
    name: string
    series: string
    printedTotal: number
    total: number
    releaseDate: string
    images: SetImages
}

interface SetImages {
    symbol: string
    logo: string
}
