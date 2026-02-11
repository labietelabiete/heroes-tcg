'use client'

import React from 'react'

import Link from 'next/link'

import { Set, getAllSetsUseCase } from '@/app/modules/set'

export default function SetsPage() {
    const [sets, setSets] = React.useState<Set[]>([])

    const fetchSets = async () => {
        await getAllSetsUseCase({
            successCallback: (response) => {
                console.log('Sets fetched successfully:', response)
                setSets(response)
            }
        })
    }

    React.useEffect(() => {
        fetchSets()
    }, [])

    return (
        <>
            <div className='text-2xl font-bold mb-8'>Sets Page</div>
            <div className='flex gap-12 flex-wrap'>
                {sets.map((set: Set) => (
                    <Link key={set.id} href={`/sets/${set.id}`}>
                        <div>{set.name}</div>
                        <img className='w-50 mb-[100px]' src={set.logo} alt={set.name} />
                    </Link>
                ))}
            </div>
        </>
    )
}
