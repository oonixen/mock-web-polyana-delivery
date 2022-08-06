export function sortWithParam <Type, Param> (
    a: Type,
    b: Type,
    param: (v:Type) => Param
): number {
    if (param(a) > param(b)) return 1
    if (param(a) < param(b)) return -1
    return 0
}