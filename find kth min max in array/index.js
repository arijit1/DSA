
let array = [99, 1, 3, 5, 6, 4];

console.log(sort(array));

function mergeSort(lh, rh) {
    let output = [];
    let i = 0, j = 0, k = 0;

    while (i < lh.length && j < rh.length) {
        if (lh[i] < rh[j]) {
            output[k] = lh[i];
            i++;
            k++;
        }
        else {
            output[k] = rh[j];
            k++;
            j++;
        }
    }
    while (i < lh.length) {
        output[k] = lh[i];
        k++; i++;
    }
    while (j < rh.length) {
        output[k] = rh[j];
        k++;
        j++;
    }
    return output;
}

function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middleIndex = Math.floor(arr.length / 2);
    let lh = arr.slice(0, middleIndex);
    let rh = arr.slice(middleIndex);

    return (
        mergeSort(
            sort(lh), sort(rh)
        )
    )

}

function kmax(array, k) {
    if (k < array.length) {
        let sorted = sort(array);
        console.log('k max is ' + sorted[k]);
    }
}

kmax(array, 4);