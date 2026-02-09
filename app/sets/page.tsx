'use client'

import React from 'react'
import { Set, getAllSetsUseCase, getSetUseCase } from '../modules/set'

export default function SetsPage() {
    const [sets, setSets] = React.useState<Set[]>([])

    const fetchSet = async () => {
        const set = await getSetUseCase({
            request: { setId: 'base1' },
            successCallback: (response) => {
                console.log('Set fetched successfully:', response)
            }
        })
    }

    const fetchSets = async () => {
        await getAllSetsUseCase({
            successCallback: (response) => {
                console.log('Sets fetched successfully:', response)
                setSets(response)
            }
        })
    }

    React.useEffect(() => {
        // fetchSet()
        fetchSets()
    }, [])

    return (
        <>
            <div className='text-2xl font-bold mb-4'>Sets Page</div>
            {sets.map((set: any) => (
                <div key={set.id}>
                    <div>{set.name}</div>
                    <img className='w-50 mb-[100px]' src={set.logo} alt={set.name} />
                </div>
            ))}
        </>
    )
}
