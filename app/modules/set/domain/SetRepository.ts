import { GetSetRequest } from '../application'
import { Set } from '../domain'

export interface SetRepository {
    get(request: GetSetRequest): Promise<Set>
}
