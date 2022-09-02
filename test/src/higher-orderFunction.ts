const arr1: number[] = [1, 2, 3]

const arr2: number[] = arr1.map(function(item) {
    return item * 2;
})

const arr3: number[] = arr1.map(item => item * 2)
                            .filter(item => item > 2)

console.log(arr3)



