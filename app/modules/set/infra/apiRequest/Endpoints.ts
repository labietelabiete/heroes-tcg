import { GetSetRequest } from '../../application'

export const ENDPOINTS = {
    GET_SET: (request: GetSetRequest) => `/sets/${request.setId}`,
    GET_ALL_SETS: '/sets'
}
