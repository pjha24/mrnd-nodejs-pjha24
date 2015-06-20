
exports.Sum = function(num1, num2){
	return num2+num1;
}

exports.SumOfArray = function(arrayOfNums){
	var sum = 0;
	for (var i = 0; i < arrayOfNums.length; i++) {
		sum += arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum = 0;
	var unique = [];
	for (var i = 0; i < arrayOfNums.length; i++) {
		visited = 0;
		var j = 0;
		for(j=0; j < unique.length;j++){
				if(arrayOfNums[i] == unique[j])
					visited = 1;
			}
			if(visited==0)
				unique[j] = arrayOfNums[i];
		};
	for (var i = 0; i < unique.length; i++) {
		sum += unique[i];
	};
	return sum;
}

exports.ReverseString = function(str){
	var reverse = '';
	for (var i = str.length - 1; i >= 0; i--) {
		var  str_rev = reverse + str[i];
		reverse = str_rev;
		};
		return reverse;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var reversedArrayOfStrings = [];
	for (var i = 0; i < Things.length; i++) {
		Things[i]
	};
}