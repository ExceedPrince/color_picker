function pageLoad () {

	let red = document.getElementById("red");
	red.value = 99;
	let green = document.getElementById("green");
	green.value = 99;
	let blue = document.getElementById("blue");
	blue.value = 99;

	let body = document.querySelector("body");

	document.querySelector(".color-picker").insertAdjacentHTML("beforeend", `
		<div class="rgb-picker">
			<label for="opacity">Opacity</label>
			<input type="number" id="opacity" min="0" max="100">
		</div>
	`);

	let opacity = document.getElementById("opacity");
	opacity.value = 100;

	function inputChange () {
			if (red.value >= 0 && red.value <= 255) {
				red.style.border = "none";
				var r = parseInt(red.value);
				var redHex = r.toString(16);
				if (redHex.length == 1) {
					redHex = "0" + redHex;
				} 
			} else {
				red.value = "";
				red.style.border = "3px solid red";
			};

			if (green.value >= 0 && green.value <= 255) {
				green.style.border = "none";
				var g = parseInt(green.value);
				var greenHex = g.toString(16);
				if (greenHex.length == 1) {
					greenHex = "0" + greenHex;
				}
			} else {
				green.value = "";
				green.style.border = "3px solid red";
			};

			if (blue.value >= 0 && blue.value <= 255) {
				blue.style.border = "none";
				var b = parseInt(blue.value);
				var blueHex = b.toString(16);
				if (blueHex.length == 1) {
					blueHex = "0" + blueHex;
				}
			} else {
				blue.value = "";
				blue.style.border = "3px solid red";
			};

			if (opacity.value >= 0 && opacity.value <= 100) {
				opacity.style.border = "none";
				var o = parseInt(opacity.value);
				var oHex = o.toString();
				if (oHex.length == 1) {
					oHex = "0.0" + oHex;
				} else if (oHex.length == 2) {
					oHex = "0." + oHex;
				} else if (oHex.length == 3) {
					oHex = 1;
				}
				} else {
				opacity.value = "";
				opacity.style.border = "3px solid red";
			};
			body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value}, ${oHex})`;
			document.getElementById("hex").innerHTML = `#${redHex}${greenHex}${blueHex}`;
			document.getElementById("redCode").innerHTML = parseInt(red.value).toString(2);
			document.getElementById("greenCode").innerHTML = parseInt(green.value).toString(2);
			document.getElementById("blueCode").innerHTML = parseInt(blue.value).toString(2);
			
	};

	red.addEventListener("change", inputChange);
	green.addEventListener("change", inputChange);
	blue.addEventListener("change", inputChange);
	opacity.addEventListener("change", inputChange);
};

window.addEventListener("load", pageLoad);