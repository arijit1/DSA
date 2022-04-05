//sort 2,1,0 without sorting algo

let arr = [1, 2, 2, 1, 0, 0, 1, 0];

function sort(arr) {
    let cnt0 = 0, cnt1 = 0, cnt2 = 0, num = 0;

    while (num < arr.length) {
        if (arr[num] === 0) {
            cnt0++;
            num++;
        }
        if (arr[num] === 1) {
            cnt1++;
            num++;
        }
        if (arr[num] === 2) {
            cnt2++;
            num++;
        }
    }
    num = num - 1;

    while (cnt2 > 0 && num >= 0) {
        arr[num] = 2;
        num--;
        cnt2--;
    }
    while (cnt1 > 0 && num >= 0) {
        arr[num] = 1;
        num--;
        cnt1--;
    }
    while (cnt0 > 0 && num >= 0) {
        arr[num] = 0;
        num--;
        cnt0--;
    }
    return arr;
}

//swapping implementation
function sort_dash(arr) {
    let mid = 0;
    let high = arr.length - 1;
    let lo = 0;
    let temp = 0;
    while (mid <= high) {
        if (arr[mid] == 0) {
            temp = arr[lo];
            arr[lo] = arr[mid];
            arr[mid] = temp;
            mid++;
            lo++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}

console.log(sort_dash(arr));