let array = [9, 8];

function mergeSort(leftArr, rightArr) {
    let output = [];
    let i = 0, j = 0, k = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            output[k] = leftArr[i];
            k++; i++;
        }
        else {
            output[k] = rightArr[j];
            k++; j++;
        }
    }
    while (i < leftArr.length) {
        output[k] = leftArr[i];
        k++; i++;
    }
    while (j < rightArr.length) {
        output[k] = rightArr[j];
        k++; j++;
    }
    return output;
}

const merge = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let len = arr.length / 2;
    let leftArray = arr.slice(0, Math.floor(len));
    let rightArr = arr.slice(Math.floor(len));
    console.log(rightArr)
    return (
        mergeSort(
            merge(leftArray), merge(rightArr)
        )
    );
}
console.log(merge(array))
