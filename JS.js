// JS Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  	if (prevScrollpos > currentScrollPos) {
    	document.getElementById("navbar").style.top = "0";
 	} else {
    	document.getElementById("navbar").style.top = "-50px";
  	}
  	prevScrollpos = currentScrollPos;
}

// Navbar scroll
function changenavbar(){
	var navbar = document.getElementById('navbar');
	var scrollValue = window.scrollY;
	if(scrollValue < 50){
		navbar.classList.remove('HeadColor');
	}else{
		navbar.classList.add('HeadColor');
	}
}
window.addEventListener('scroll', changenavbar);

// JS active navbar
var header = document.getElementById("menu-navbar");
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

// JS mobile active navbar
var header2 = document.getElementById("mySidepanel");
var btns2 = document.getElementsByClassName("btn2");

for (var i = 0; i < btns2.length; i++) {
	btns2[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active2");
		current[0].className = current[0].className.replace(" active2", "");
		this.className += " active2";
	});
}


// JS number persen circle 1
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
	if(counter == 60){
		clearInterval();
	}else{
		counter += 1;
		number.innerHTML = counter + "%";
	}
}, 33);

// JS number persen circle 2
let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
	if(counter2 == 65){
		clearInterval();
	}else{
		counter2 += 1;
		number2.innerHTML = counter2 + "%";
	}
}, 30);

// JS number persen circle 3
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
	if(counter3 == 10){
		clearInterval();
	}else{
		counter3 += 1;
		number3.innerHTML = counter3 + "%";
	}
}, 180);

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}