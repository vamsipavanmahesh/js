var arr = [1, 3, 5, 8];
var binary = function(arr, search) {

  var low = 0;
  var high = arr.length - 1;
  var mid;

  while (low <= high) {
    mid = Math.round((high + low) / 2);
    if (search === arr[mid]) {
      return mid;
    } else if (search > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(binary(arr, 3)); //1
console.log(binary(arr, 8)); //3
console.log(binary(arr, 17)); //-1