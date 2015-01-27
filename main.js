$(document).on('ready', function() {
  
  var outerShell = $('<div class="outer-shell"></div>')
  		


  var innerShell = $('<div class="inner-shell"></div>')
  		

  var amPm = $('<div class="ampm-labels"></div>')
  		.html('<div>PM</div><div>AUTO</div>')

  		
  
  var clockScreen = $('<div class="clock-screen"></div>')
  

  var clockAmPm = $('<div class="clock-ampm"></div>')
  
  var clockText = $('<div class="clock-text"></div>')
  var time = 0
  var countTime = 0		
  setInterval(function(){
                      time = countTime++;
                      // console.log(time);
                      $('.clock-text').text(time);
                      // return time;
                    }, 1000);
  

// moment js to format time ;;;; use the date property
console.log('Time: ', time);
  
  // var clockText = $('<div class="clock-text"></div>')
                    

  
  		
  		

  var bottomAM = $('<div class="bottom-am"><span class="right-label">AM</span>53 60 70 90 110 140 170</div>')
  		// .text('53 60 70 90 110 140 170')
  		
  		

  var bottomFM = $('<div class="bottom-fm"><span class="right-label">FM</span>88 92 96 102 106 108</div>')
  		// .text('FM 88 92 96 102 106 108')
  		

  clockScreen.append(bottomFM);
  clockScreen.append(bottomAM);
  clockScreen.append(clockText);
  clockScreen.append(clockAmPm);
  innerShell.append(clockScreen);
  innerShell.append(amPm);
  outerShell.append(innerShell);
  
  $('body').append(outerShell);

  $()



});