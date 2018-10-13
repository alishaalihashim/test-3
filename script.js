let numb1 =5.99;
let numb2 =0;


function subraction() {
	numb2--
	if (numb2 < 0) {
		document.querySelector(".form-control").value =0;
		document.querySelector(".price-count").innerHTML =0; 
	}
	else{
	document.querySelector(".form-control").value =numb2;
	document.querySelector(".price-count").innerHTML =numb2 * numb1; 
}
}

function addition() {
	document.querySelector(".form-control").value = numb2++;
	document.querySelector(".price-count").innerHTML= numb1 * numb2;
}