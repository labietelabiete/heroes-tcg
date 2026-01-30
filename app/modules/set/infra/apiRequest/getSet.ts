import { ENDPOINTS } from './Endpoints'
import { GetSetRequest } from '../../application'
import { HttpClient } from '@/app/modules/shared/HttpClient/HttpClient'
import { Set } from '../../domain'
import { SetData } from '../dataObjects/SetData'
import { setDataToSet } from '../adapters/setDataToSet'

export async function getSet(request: GetSetRequest): Promise<Set> {
    const response = await HttpClient.get<SetData>(ENDPOINTS.GET_SET(request))
    return setDataToSet(response)
}
