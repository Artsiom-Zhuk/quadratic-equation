module.exports = function solveEquation(equation) {
  // your implementation
 var str = equation.replace(/x/g, "");
 str = str.replace(/ /g, "");
 str = str.replace("+", "");
 str = str.replace("^2", "");
 var arr = str.split('*');
 var D = arr[1] * arr[1] - 4 * arr[0] * arr[2];
 var x1 = Math.round((-arr[1]  + Math.sqrt(D)) / (2 * arr[0]));
 var x2 = Math.round((-arr[1]  - Math.sqrt(D)) / (2 * arr[0]));
 var result = []; 
 if (x1 < x2 ){
 				result[0] = x1;
 				result[1] = x2;
				return result;
	} 			else {
		result[0] = x2;
    	result[1] = x1;
    	return result;
	}
}
