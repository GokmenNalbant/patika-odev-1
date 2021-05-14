let name = prompt();


document.querySelector("#myName").innerHTML = name;
function showTime() {
let date = new Date();

var time = date.toLocaleTimeString();

var day;
switch (date.getDay()) {
	case 0:
		day = "Pazar";
		break;
	case 1:
		day = "Pazartesi";
		break;
	case 2:
		day = "Salı";
		break;
	case 3:
		day = "Çarşamba";
		break;
	case 4:
		day = "Perşembe";
		break;
	case 5:
		day = "Cuma";
		break;
	case 6:
		day = "Cumartesi";
		break;
}

document.querySelector("#myClock").innerHTML = `${time}, ${day}`;
setTimeout(showTime, 1000);
}

showTime();