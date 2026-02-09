import { GetSetRequest } from '../application'
import { SetRepository } from '../domain'
import * as REQUESTS from './apiRequest'

export const SetRepositoryApi: SetRepository = {
    async get(request: GetSetRequest) {
        return REQUESTS.getSet(request)
    },

    async getAll() {
        return REQUESTS.getAllSets()
    }
}
