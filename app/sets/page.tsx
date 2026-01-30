'use client'

import React from 'react'

export default function SetsPage() {
    const [sets, setSets] = React.useState([])

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    const fetchData = () => {
        const myHeaders = new Headers()
        myHeaders.append('Authorization', 'Bearer' + apiKey)
        const url = apiUrl + '/sets'
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow' as RequestRedirect
        }
        fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => setSets(JSON.parse(result).data))
            .catch((error) => console.log('error', error))
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='text-2xl font-bold mb-4'>Sets Page</div>
            {sets.map((set: any) => (
                <div key={set.id}>
                    <div>{set.name}</div>
                    <img className='w-50 mb-[100px]' src={set.images?.logo} alt={set.name} />
                </div>
            ))}
        </>
    )
}
