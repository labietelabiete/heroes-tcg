export interface Set {
    id: string
    name: string
    logo: string
    releaseDate?: string
    serie?: string
    cardsCount?: CardCountSet
    cards?: CardSet[]
}

export interface CardCountSet {
    total: number
    official: number
    firstEd?: number
    holo?: number
    normal?: number
    reverse?: number
}

export interface CardSet {
    id: string
    localId: string
    name: string
    image: string
}
