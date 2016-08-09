var chores = ['mop', 'vacuum', 'clean bathroom', 'clean kitchen', 'take out rubbish', 'buy toilet paper'];

function decideChores(array){

	var flatmate1Arr = [];
	var flatmate2Arr = [];

	while(array.length > 0){
	var number = Math.floor(Math.random() * (10 - 0) + 0); //generates random number between 0 and 10

		if(number <= 5 && flatmate1Arr.length < 3){ //picks a chore for James if 3 chores not already picked
			if(number % 2){
				flatmate1Arr.push(array.shift());
		}
			else
				flatmate1Arr.push(array.pop())
			}

		else if (number >= 6 && flatmate2Arr.length < 3) { //picks a chore for George if 3 chores not already picked
			if(number % 2){
				flatmate2Arr.push(array.pop());
		}
			else {
				flatmate2Arr.push(array.shift());
			}
		}
	}

	for(i = 0; i < flatmate1Arr.length; i++){

		var list = document.createElement('li')
		var node = document.createTextNode(flatmate1Arr[i])
		list.appendChild(node)

		var element = document.getElementById("georgeList");
		var child = document.getElementById("referenceDiv");
		element.insertBefore(list, child);
	}
	for(i = 0; i < flatmate2Arr.length; i++){

		var list = document.createElement('li')
		var node = document.createTextNode(flatmate2Arr[i])
		list.appendChild(node)

		var element = document.getElementById("jamesList");
		var child = document.getElementById("referenceDiv");
		element.insertBefore(list, child);
	}


	console.log ({ //returns an object with the chores matched to the person
		flatMateOne: flatmate1Arr,
		flatMateTwo: flatmate2Arr
	})

}
