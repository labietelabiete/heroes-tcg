import { GetSetRequest } from './interfaces'
import { Set } from '../domain'
import { SetRepositoryApi } from '../infra'

export async function getSetUseCase({
    request,
    successCallback,
    errorCallback,
    finallyCallback
}: {
    request: GetSetRequest
    successCallback: (response: Set) => void
    errorCallback?: (error?: Error) => void
    finallyCallback?: () => void
}): Promise<void> {
    await SetRepositoryApi.get(request)
        .then((response: Set) => {
            successCallback(response)
        })
        .catch((error?: Error) => {
            errorCallback?.(error)
        })
        .finally(() => {
            finallyCallback?.()
        })
}
