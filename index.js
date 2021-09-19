// Code your solution here!


function printString(myString) {
	console.log(myString[0]);

	if (myString.length > 1) {
		let mySubString = myString.substring(1, myString.length);
		printString(mySubString);
	} else {
		return true;
	}
}


function reverseString (str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

function isPalindrome (str) {
    if (str.length < 2) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome( str.slice(1, str.length - 1));
    }
    return false;
}



function addUpTo(array, n) {
    if (n === array.length) {
        return 0;
    } else {
        return array[n] + addUpTo(array, n + 1);
    }
}


function maxOf(arr) {
    let nums = arr.slice();
    // base case: if we're at the last number, return it
    if (nums.length == 1) { return nums[0]; }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }

    // with one less number in the array, call the same function
    return maxOf(nums);
}


