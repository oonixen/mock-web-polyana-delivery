export interface IRefreshToken {
    get(): string | undefined
    set(token: string): void
    delete(): void
}