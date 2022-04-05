let array = [54545, 22, 3, 44, 12, 32,22,1000,923,437,2];

let min = array[0], max = array[1], start = 0, end = array.length - 1;

while (start <= end) {
    if (array[start] > max) {
        max = array[start];
    }
    if (array[start] < min) {
        min = array[start]
    }
    start++;

}
console.log(min, max);
