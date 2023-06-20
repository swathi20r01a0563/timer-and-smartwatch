(function(d) {
    'use strict';
   var target_date, flag=true, si, 
       days, hours, minutes, seconds; // variables for time units

   var countdown = d.getElementById( 'tiles' ),
           start = d.getElementById( 'start' );
    countdown.innerHTML = '<span>00</span><span>00</span><span>00</span>';
    start.addEventListener('click', 
      function() {
         if ( flag=== true ) {
			 var txtTimer = document.getElementById('txtTimer').value;
			 var valTimer = txtTimer * 60;
              target_date = new Date().getTime() + (1000 * valTimer) ;
              si = setInterval( function () { getCountdown(); }, 1000 );
              start.textContent = 'stop';
              flag = false;
			  document.getElementById("demo").innerHTML = "";
             }
         else {
              clearInterval(si);
              start.textContent='start';
              countdown.innerHTML = '<span>00</span><span>00</span><span>00</span>';
              flag = true;
       }}, false );

function getCountdown(){

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = target_date - now;
    
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// format countdown string + set tag value
	countdown.innerHTML = '<span>' + hours + '</span><span>' + minutes + '</span><span>' + seconds + '</span>'; 
	
	// If the count down is over, write some text 
    if (distance < -1) {
        clearInterval(si);
		start.textContent='start';
		countdown.innerHTML = '<span>00</span><span>00</span><span>00</span>';
		flag = true;
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}

function pad( n ) {
	return ( n < 10 ? '0' : '' ) + n;
   }
  }( document ));