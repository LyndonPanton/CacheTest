(function() {
	let hours;
	let minutes;
	let seconds;

	if ((new Date()).getHours() < 10) {
		hours = `0${(new Date()).getHours()}`;
	} else {
		hours = (new Date()).getHours();
	}

	if ((new Date()).getMinutes() < 10) {
		minutes = `0${(new Date()).getMinutes()}`;
	} else {
		minutes = (new Date()).getMinutes();
	}

	if ((new Date()).getSeconds() < 10) {
		seconds = `0${(new Date()).getSeconds()}`;
	} else {
		seconds = (new Date()).getSeconds();
	}

	let day;
	let month;
	let year = (new Date()).getFullYear();

	if ((new Date()).getDate() < 10) {
		day = `0${(new Date()).getDate()}`;
	} else {
		day = (new Date()).getDate();
	}

	if (((new Date()).getMonth() + 1) < 10) {
		month = `0${Number((new Date()).getMonth()) + 1}`;
	} else {
		month = Number((new Date()).getMonth()) + 1;
	}

	document.getElementById("copyright-year").textContent = year;

	let cacheTime = document.getElementById("cache-time");
	cacheTime.textContent = `${day}/${month}/${year} @ ${hours}:${minutes}:${seconds}`;

	let connction = document.getElementById("status");

	function status(event) {
		if (navigator.onLine) {
			connction.textContent = "online";
			connction.classList.remove("offline");
			connction.classList.add("online");
		} else {
			connction.textContent = "offline";
			connction.classList.remove("online");
			connction.classList.add("offline");
		}
	}

	window.addEventListener("online", function() {
		console.log("online...");
		status();
	});

	window.addEventListener("offline", function() {
		console.log("offline...");
		status();
	});

	status({type: "ready"});
}());