import { getConfigs } from '@/app/config'

const { API_CONFIG } = getConfigs()

export class HttpClient {
    static async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${API_CONFIG.URL}${endpoint}`
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options?.headers,
                'X-Api-Key': API_CONFIG.KEY
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json() as Promise<T>
    }

    static async post<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<T> {
        const url = `${API_CONFIG.URL}${endpoint}`
        const headers: Record<string, string> = {
            'X-Api-Key': API_CONFIG.KEY,
            ...(options?.headers as Record<string, string>)
        }

        let processedBody: BodyInit | null | undefined
        if (body instanceof FormData) {
            processedBody = body
        } else if (body !== undefined && body !== null) {
            processedBody = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        } else {
            processedBody = undefined
        }

        const response = await fetch(url, {
            method: 'POST',
            body: processedBody,
            ...options,
            headers
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json() as Promise<T>
    }

    static async put<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<T> {
        const url = `${API_CONFIG.URL}${endpoint}`
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
                'X-Api-Key': API_CONFIG.KEY
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json() as Promise<T>
    }
}
