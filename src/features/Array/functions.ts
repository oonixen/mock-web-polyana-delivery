export function getIndexByParam <arrayObj, searchParam> (
    arr: Array<arrayObj>,
    search: searchParam,
    compareFunc: (value: arrayObj) => searchParam
) {
    for (let i = 0; i < arr.length; i++) {
        if (compareFunc(arr[i]) === search) return i
    }
    return -1
}

