export function addQueryParameter(url: string, name: string, value: string) : string {
    const iUrl = new URL(url)
    iUrl.searchParams.set(name, value)
    return iUrl.href
}

export function deleteQueryParameter(url: string, name: string) : string {
    const iUrl = new URL(url)
    iUrl.searchParams.delete(name)
    return iUrl.href
}