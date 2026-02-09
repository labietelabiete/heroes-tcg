import { ENDPOINTS } from './Endpoints'
import { HttpClient } from '@/app/modules/shared/HttpClient/HttpClient'
import { Set } from '../../domain'
import { SetData } from '../dataObjects/SetData'
import { setDataToSet } from '../adapters/setDataToSet'

export async function getSets(): Promise<Set[]> {
    const response = await HttpClient.get<{ data: SetData[] }>(ENDPOINTS.GET_SETS())
    return response.data.map(setDataToSet)
}
