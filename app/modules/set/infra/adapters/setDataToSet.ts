import { Set } from '../../domain'
import { SetData } from '../dataObjects/SetData'
import { getSetLogoUrl } from '@/app/modules/shared/utils/set'

export function setDataToSet(data: SetData): Set {
    return {
        id: data.id,
        name: data.name,
        logo: getSetLogoUrl(data.logo),
        releaseDate: data?.releaseDate,
        serie: data.serie?.name
    }
}
