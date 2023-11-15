// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let n = intervals.length;

  if (n === 0) return [newInterval];
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];
  if (newInterval[0] > intervals[n - 1][1]) return [...intervals, newInterval];

  let res = new Array();
  let i = 0;
  for (i; i < n; i++) {
    let s = newInterval[0];
    if (s > intervals[i][1]) res.push(intervals[i]);
    else if (s >= intervals[i][0] && s <= intervals[i][1]) {
      newInterval[0] = intervals[i][0];
      break;
    } else if (s < intervals[i][0]) {
      break;
    }
  }

  for (i; i < n; i++) {
    let e = newInterval[1];
    if (e >= intervals[i][0] && e <= intervals[i][1]) {
      newInterval[1] = intervals[i][1];
      res.push(newInterval);
      i++;
      break;
    } else if (e > intervals[i][1] && i == n - 1) {
      res.push(newInterval);
    } else if (e < intervals[i][0]) {
      res.push(newInterval);
      break;
    }
  }

  for (i; i < n; i++) {
    res.push(intervals[i]);
  }
  return res;
};
