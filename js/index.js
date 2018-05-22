var timewatch;
 $(document).ready(function (){     
		    timewatch = 1;
        $("#showTime").html("1:00");
 });

		function show () {
        $("#showTime").empty().html(timewatch + ":00");
		}
		$('#plus').on("click",function() {
            timewatch = timewatch + 1 ;
		        show();
		});
    $('#minus').on("click",function() { 
            if (timewatch > 1) {
            timewatch = timewatch - 1 ;
            show();
            }   
        });
		
var now, finish, remain, min, sec, x;  

function myTimer () {
  x = setInterval(function () {             
       now = $.now();

       remain = finish - now;
              
      min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
      sec = Math.round((remain % (1000 * 60)) / 1000);

if (sec == 60) {
    document.getElementById("showTime").innerHTML = "1:00";
}
else if (sec < 10) {
    document.getElementById("showTime").innerHTML = min + ":0" + sec;
}
else document.getElementById("showTime").innerHTML = min + ":" + sec;
  
 if (remain < 0) {
   clearInterval(x);                 
   document.getElementById("showTime").innerHTML = "Time up";
 }

 var dg, n;
        dg = 360 / length;
        n = length - remain;
        left = -90 + dg * n;
        right = -90 + dg * n - 180;

 var left, right, chord=[];       
    if (left < 90) {
    chord = ["linear-gradient(" + left + "deg, black 50%, transparent 50%)",
             "linear-gradient(-90deg, #064D55 50%, transparent 50%)"];
    } else {
    chord = ["linear-gradient(" + right + "deg, #064D55 50%, transparent 50%)",
              "linear-gradient(-90deg, #064D55 50%, transparent 50%)"];
            }

               
 var pichart;
 pichart = $('#timewatcher').css({
       "background-image": chord.join(',')
                });
            }, 1000);
        }

 var current, begin, length, stopTime, stopLength;
    $('#resume').on("click", function () {

       if (isNaN(stopTime)) {
            begin = $.now();
            length = timewatch * 60 * 1000;
            finish = begin + length;
                myTimer();
       } 
      else {
                begin = $.now();
                finish = begin + stopLength;
            	  myTimer();
            }
        });
   
        $("#stop").on("click", function () {
            stopTime = $.now();
            stopLength = finish - stopTime;
            clearInterval(x);
        });

       
        $('#startover').on("click", function() {
            clearInterval(x);
            pichart = $('#timewatcher').css({
                "background-image": 'linear-gradient(-90deg, black 50%, transparent 50%)'
            });
            timewatch = 1;
            show();
			      stopTime = NaN;
        });