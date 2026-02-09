import { Set, getAllSetsUseCase } from '@/app/modules/set'
import { SetRepositoryApi } from '@/app/modules/set/infra/SetRepositoryApi'

jest.mock('../../../../app/modules/set/infra/SetRepositoryApi')

describe('getAllSetsUseCase', () => {
    const mockResponse = {} as Set[]
    const successCallback = jest.fn()
    const errorCallback = jest.fn()
    const finallyCallback = jest.fn()

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should call successCallback on successful getting', async () => {
        jest.mocked(SetRepositoryApi.getAll).mockResolvedValueOnce(mockResponse)

        await getAllSetsUseCase({
            successCallback,
            errorCallback,
            finallyCallback
        })

        expect(SetRepositoryApi.getAll).toHaveBeenCalled()
        expect(successCallback).toHaveBeenCalledWith(mockResponse)
        expect(errorCallback).not.toHaveBeenCalled()
        expect(finallyCallback).toHaveBeenCalled()
    })
    it('should call errorCallback on error', async () => {
        const error = new Error('Failed to fetch')
        jest.mocked(SetRepositoryApi.getAll).mockRejectedValueOnce(error)

        await getAllSetsUseCase({
            successCallback,
            errorCallback,
            finallyCallback
        })

        expect(SetRepositoryApi.getAll).toHaveBeenCalled()
        expect(successCallback).not.toHaveBeenCalled()
        expect(errorCallback).toHaveBeenCalledWith(error)
        expect(finallyCallback).toHaveBeenCalled()
    })
})
