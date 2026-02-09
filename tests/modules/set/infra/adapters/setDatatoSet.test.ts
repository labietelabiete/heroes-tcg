import { SetData } from '@/app/modules/set/infra/dataObjects/SetData'
import { setDataToSet } from '@/app/modules/set/infra/adapters/setDataToSet'

describe('setDataToSet', () => {
    it('should convert SetData to Set correctly', () => {
        const data: SetData = {
            id: 'set1',
            name: 'Set One',
            logo: 'set1-logo',
            cardCount: { total: 100, official: 80 },
            releaseDate: '2026-01-01',
            serie: { id: 'serieA', name: 'Serie A' }
        }

        const set = {
            id: 'set1',
            name: 'Set One',
            logo: 'set1-logo.png',
            releaseDate: '2026-01-01',
            serie: 'Serie A'
        }

        const result = setDataToSet(data)

        expect(result).toEqual(set)
    })
})
