export interface SetData {
    id: string
    name: string
    series: string
    printedTotal: number
    total: number
    legalities: SetLegalitiesData
    ptcgoCode: string | null
    releaseDate: string
    updatedAt: string
    images: SetImagesData
}

interface SetImagesData {
    symbol: string
    logo: string
}

interface SetLegalitiesData {
    unlimited: string
    standard: string
    expanded: string
}
