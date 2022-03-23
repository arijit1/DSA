/**
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, and return an array of the non-overlapping intervals that 
 * cover all the intervals in the input.
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
let intervals = [[2, 6], [1, 3], [8, 10], [15, 18]];
let intervals_2 = [[1, 4], [2, 3]];
var merge = function (intervals) {
    //sort array using first element of each subarray
    intervals = intervals.sort(function (a, b) { return a[0] - b[0]; });
    
    const result = [intervals[0]];
    for (let interval of intervals) {
        let e1 = result[result.length - 1][1];
        let s2 = interval[0];
        let e2 = interval[1];

        if (e1 >= s2) {
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(interval)
        }
    }

    return result;
};
console.log(merge(intervals));
console.log(merge(intervals_2));