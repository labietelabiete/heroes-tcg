import { Set } from '../../domain'
import { SetData } from '../dataObjects/SetData'

export function setDataToSet(data: SetData): Set {
    return {
        id: data.id,
        name: data.name,
        series: data.series,
        printedTotal: data.printedTotal,
        total: data.total,
        releaseDate: data.releaseDate ?? '',
        images: {
            symbol: data.images.symbol ?? '',
            logo: data.images?.logo ?? ''
        }
    }
}
