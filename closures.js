function one(x){
 var y = 2;
	return function(){
		return x+y;
	}
}


var x = one(5);
x;


what do you think will happen? 
x got a function returned which is anonymous. To call up that function, to this x();



let's go with a different approach. Let's name the function inside


function() one(x){
	var y =5;

	return function b(){
		return x+y;
	};
}

var x= one(5);
x 

so what will happen now, instead of anonymous function, a named function gets returned

If you want to call it, do like x();


