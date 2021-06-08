var isLetter = function(ch){
	return /[A-Za-z]/.test(ch);
}

var isVowel = function(ch){

	return /[AEIOUYaeiouy]/.test(ch);
}

function isConsonant(ch){
	return (isLetter(ch) && !isVowel(ch));
}

var fileNameToUnix= function(str){
	return str.replace(/ /g,"-");
}


var maxWord = function(str){
	var num = str.split(" ");
	var maxLen = 0;
	var word = " ";
	for(var i =0;i< num.length;++i){
		if(maxLen < num[i].length){
			maxLen = num[i].length;
			word = num[i];
		}
	}
return word;
}


var isPerfect = function(n){
  var sum = 0;
  for(var i = 1 ;i< n; ++i){
    if(n%i==0){
      sum = sum + i;
    }
  }
  return sum;
}

var getPerfectNumbers = function(arr){
	num = " "
	for(var i =0;i< arr.length;++i){
		var sum = isPerfect(arr[i]);
		if(sum == arr[i]){
			num = num + arr[i].toString() + " ";
		}
	}
	return num;
}
