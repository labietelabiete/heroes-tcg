import { Set } from '../domain'
import { SetRepositoryApi } from '../infra'

export async function getAllSetsUseCase({
    successCallback,
    errorCallback,
    finallyCallback
}: {
    successCallback: (response: Set[]) => void
    errorCallback?: (error?: Error) => void
    finallyCallback?: () => void
}): Promise<void> {
    await SetRepositoryApi.getAll()
        .then((response: Set[]) => {
            successCallback(response)
        })
        .catch((error?: Error) => {
            errorCallback?.(error)
        })
        .finally(() => {
            finallyCallback?.()
        })
}
