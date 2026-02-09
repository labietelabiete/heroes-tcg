import { ENDPOINTS } from '@/app/modules/set/infra/apiRequest/Endpoints'
import { HttpClient } from '@/app/modules/shared/HttpClient/HttpClient'
import { Set } from '@/app/modules/set'
import { SetData } from '@/app/modules/set/infra/dataObjects/SetData'
import { getAllSets } from '@/app/modules/set/infra/apiRequest'
import { setDataToSet } from '@/app/modules/set/infra/adapters/setDataToSet'

jest.mock('../../../../../app/modules/shared/HttpClient/HttpClient')
jest.mock('../../../../../app/modules/set/infra/apiRequest/Endpoints')
jest.mock('../../../../../app/modules/set/infra/adapters/setDataToSet')

describe('GetAllSets', () => {
    const mockGet = HttpClient.get as jest.MockedFunction<typeof HttpClient.get>
    const mockSetDataToSet = setDataToSet as jest.MockedFunction<typeof setDataToSet>
    const mockSetData = [] as SetData[]
    const mockResponse = [] as Set[]
    beforeEach(() => {
        mockGet.mockResolvedValueOnce(mockSetData)
        mockSetDataToSet.mockReturnValue({} as Set)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should call get with the correct parameters', async () => {
        mockGet.mockResolvedValue(mockResponse)

        await getAllSets()

        expect(mockGet).toHaveBeenCalledWith(ENDPOINTS.GET_ALL_SETS)
    })
    it('should get the content and get the set data', async () => {
        mockGet.mockResolvedValue(mockResponse)

        const result = await getAllSets()

        expect(result).toStrictEqual(mockResponse)
    })
    // TODO: Fix this test
    it.skip('should handle errors thrown by get', async () => {
        const errorMessage = 'Error getting sets'

        mockGet.mockRejectedValue(new Error(errorMessage))

        await expect(getAllSets()).rejects.toThrow(errorMessage)
    })
})
