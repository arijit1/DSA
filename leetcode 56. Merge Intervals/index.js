/**
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, and return an array of the non-overlapping intervals that 
 * cover all the intervals in the input.
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
let intervals = [[2, 6],[1, 3], [8, 10], [15, 18]];
let intervals_2 = [[1,4],[2,3]];
var merge = function (intervals) {
    intervals = intervals.sort(function (a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0] && intervals[i][1]<=intervals[i+1][1]) {
            intervals[i + 1][0] = intervals[i][0];
            intervals.shift();
        }else{
            intervals[i+1][0] = intervals[i][0];
            intervals[i+1][1] = intervals[i][1];
        }
    }
    
    return intervals;
};
console.log(merge(intervals));
console.log(merge(intervals_2));