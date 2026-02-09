import * as REQUESTS from '../../../../app/modules/set/infra/apiRequest'
import { Set, SetRepositoryApi } from '@/app/modules/set'

jest.mock('../../../../app/modules/set/infra/apiRequest')

describe('SetRepositoryApi', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should get all sets', async () => {
        jest.mocked(REQUESTS.getAllSets).mockResolvedValueOnce([] as Set[])

        await SetRepositoryApi.getAll()

        expect(REQUESTS.getAllSets).toHaveBeenCalledTimes(1)
    })
})
