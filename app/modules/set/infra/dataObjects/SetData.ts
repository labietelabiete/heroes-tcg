export interface SetData {
    id: string
    name: string
    logo: string
    cardCount: CardCountSetData
    cards?: CardSetData[]
    releaseDate?: string
    serie?: SerieSetData
    legal?: LegalSetData
    tcgOnline?: string
    abbreviation?: AbbreviationSetData
}

export interface CardCountSetData {
    total: number
    official: number
    firstEd?: number
    holo?: number
    normal?: number
    reverse?: number
}

export interface CardSetData {
    id: string
    localId: string
    name: string
    image: string
}

export interface SerieSetData {
    id: string
    name: string
}

export interface LegalSetData {
    expanded: boolean
    standard: boolean
}

export interface AbbreviationSetData {
    official: string
}
