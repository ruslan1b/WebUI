function count (num1, num2, mark) {

	switch(mark){
		case '+':
			return num1+num2;
			
		case '-':
			return num1-num2;
			
		case '*':
			return num1*num2;
			
		case '/':
			return num1/num2;
			
		default: return null;
	};
};
console.log(count(5,8,'+'));