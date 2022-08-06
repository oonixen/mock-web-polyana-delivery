export interface IAccessToken {
    get(): string | null
    set(token: string): void
    delete(): void
}