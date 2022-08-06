export function getPhoneMask (): string {
    return "+7(999)999-99-99"
}

export function clearPhoneMask (phone:string): string {
    return phone.replace(/[^\d+]/g, "")
}

export function isValidPhone (phone:string): boolean {
    return /^\+79(\d){9}$/.test(phone)
}