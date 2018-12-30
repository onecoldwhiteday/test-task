Подключил imasksjs для маски

var phone = document.getElementById('phone');
var mask = new IMask(phone, {
  mask: '+{7}(000) 000-00-00'
});

if (localStorage.getItem('startTime') == undefined) {
	localStorage.setItem('startTime', Date.parse(new Date()));
};

function getTimeRemains(endtime) {


	var periodLeft = Date.parse(endtime) - Date.parse(new Date());


	var sec = Math.floor( (periodLeft/1000) % 60 );
	var min = Math.floor( (periodLeft/1000/60) % 60 );
	var hours = Math.floor( (periodLeft/(1000 * 60 * 60)) % 24 );
	var days = Math.floor( periodLeft/(1000 * 60 * 60 * 24) )

return {
	'total': periodLeft,
	'minutes': min,
	'seconds': sec,
	'hours': hours,
	'days': days
}


}

function setTimer(endtime) {
	var timer = document.getElementById('timer');
	var daysField = timer.querySelector('.days');
	var hoursField = timer.querySelector('.hours');
	var minutesField = timer.querySelector('.minutes');
	var secondsField = timer.querySelector('.seconds');

	function updateTimer() {
		var time = getTimeRemains(endtime);

		daysField.innerHTML = time.days;
		hoursField.innerHTML = time.hours;
		minutesField.innerHTML = time.minutes;
		secondsField.innerHTML = time.seconds;

		if (time.total <= 0) {
      		clearInterval(interval);

		}

	}

	updateTimer();
	var interval = setInterval(updateTimer, 1000);

}

	var end = new Date(+localStorage.getItem('startTime') + 24 * 60 * 60 * 1000);
	setTimer(end);