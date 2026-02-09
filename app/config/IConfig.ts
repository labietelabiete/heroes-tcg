interface ApiConfig {
    URL: string
    KEY: string
}

export interface IConfig {
    API_CONFIG: ApiConfig
}

export function getConfigs(): IConfig {
    return {
        API_CONFIG: {
            URL: process.env.NEXT_PUBLIC_API_URL ?? '',
            KEY: process.env.NEXT_PUBLIC_API_KEY ?? ''
        }
    }
}
