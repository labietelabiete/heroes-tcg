'use client'

import React from 'react'

import { useParams } from 'next/navigation'

import { Set, getSetUseCase } from '@/app/modules/set'

export default function SetDetailPage() {
    const params = useParams()
    const { id } = params as { id: string }

    const [set, setSet] = React.useState<Set | null>(null)

    const fetchSet = async () => {
        await getSetUseCase({
            request: { setId: id },
            successCallback: (response) => {
                console.log('Set fetched successfully:', response)
                setSet(response)
            }
        })
    }

    React.useEffect(() => {
        if (id) fetchSet()
    }, [id])

    if (!set) return <div>Loading...</div>

    return (
        <>
            <div>
                <h1 className='text-2xl font-bold mb-4'>{set.name}</h1>
                <img src={set.logo} alt={set.name} className='w-64' />
            </div>
            <div>
                <h2 className='text-xl font-semibold mt-6 mb-2'>Cards:</h2>
                <div className='flex gap-4 flex-wrap'>
                    {set.cards?.map((card) => (
                        <div key={card.id} className='w-40'>
                            <div>
                                {card.localId} - {card.name}
                            </div>
                            <img src={card.image} alt={card.name} className='w-full' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
