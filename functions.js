// jshint esversion: 7

let arrAvg = (arr) => {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    var avg = total / arr.length;
    return avg;
};
arrAvg([1, 2, 3]);
arrAvg([4, 5, 6, 7, 8]);

// ===========================

let arrMax = (arr) => {
    var largest = arr[0];
    arr.forEach(function(elem) {
        if (largest < elem) {
            largest = elem;
        }
    });
    return largest;
};
arrMax([2, 3234234, 4, 999]);
arrMax([24754676, 32, 123, 88]);

// ===========================

let sumEvens = (arr) => {
        var sum = 0;
	for (var i of arr) {
		if (i % 2 == 0) {
		 (sum += i);
  }
}
 return sum;
};
sumEvens([1,2,3,4,5,6]);

// ===========================

let alphaPosition = function(s) {
    var lower = s.toLowerCase();
    var result = lower.charCodeAt(0) - 96;
    return result;
};
alphaPosition("P");
alphaPosition("r");

// ===========================
