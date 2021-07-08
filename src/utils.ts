
export function choice<T>(list: Array<T>, count: Number = 1): Array<T> | T {
    let length = list.length
    if (count > length) {
        throw Error('')
    }
    const index_list = new Set<number>()
    do {
        index_list.add(Math.floor((Math.random() * length)))
    } while (index_list.size === count)

    let result = new Array
    for (let index of index_list) {
        result.push(list[index])
    }

    return result.length === 1 ? result[0] : result
}

let a = choice([1, 2, 3, 4, 5],2)
console.log(a);
