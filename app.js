const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
	const weight = document.getElementById("weightInput").value;
	const height = document.getElementById("heightInput").value;
	
	if(weight === '' || height === '') {
		alert("Please enter both weight and height values.");
		return;
	}
	
	const bmi = weight / (height * height);
	
	document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
}

