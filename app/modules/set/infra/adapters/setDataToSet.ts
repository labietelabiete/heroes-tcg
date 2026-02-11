import { getCardImageUrl, getSetLogoUrl } from '@/app/modules/shared/utils/set'
import { Set } from '../../domain'
import { SetData } from '../dataObjects/SetData'

export function setDataToSet(data: SetData): Set {
    return {
        id: data.id,
        name: data.name,
        logo: getSetLogoUrl(data.logo),
        releaseDate: data?.releaseDate,
        serie: data.serie?.name,
        cardsCount: {
            total: data.cardCount.total,
            official: data.cardCount.official,
            firstEd: data.cardCount.firstEd,
            holo: data.cardCount.holo,
            normal: data.cardCount.normal,
            reverse: data.cardCount.reverse
        },
        cards: data.cards?.map((card) => ({
            id: card.id,
            localId: card.localId,
            name: card.name,
            image: getCardImageUrl(card.image)
        }))
    }
}
