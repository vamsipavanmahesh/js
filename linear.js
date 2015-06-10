var arr = [1,4,5,3];

var linear = function(arr, search){
	
	for(var i=0;i<arr.length;i++){
		if(arr[i] === search ){
		  var pos = i;
		  return pos+1;
		}
	}

 return -1;
};

var pos = linear(arr,5);
console.log("The search position is "+pos);
