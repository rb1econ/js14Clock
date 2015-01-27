$(document).on('ready', function() {
  
  var outerShell = $('<div class="outer-shell"></div>')
  		


  var innerShell = $('<div class="inner-shell"></div>')
  		

  var amPm = $('<div class="ampm-labels"></div>')
  		.html('<div>PM</div><div>AUTO</div>')

  		
  
  var clockScreen = $('<div class="clock-screen"></div>')
  

  var clockAmPm = $('<div class="clock-ampm"></div>')
  		

  var clockText = $('<div class="clock-text"></div>')
  		.text('05:00')
  		

  var bottomAM = $('<div class="bottom-am"><p class="right">AM</p></div>')
  		.text('53 60 70 90 110 140 170')
  		
  		

  var bottomFM = $('<div class="bottom-fm"></div>')
  		.text('FM 88 92 96 102 106 108')
  		

  clockScreen.append(bottomFM);
  clockScreen.append(bottomAM);
  clockScreen.append(clockText);
  clockScreen.append(clockAmPm);
  innerShell.append(clockScreen);
  innerShell.append(amPm);
  outerShell.append(innerShell);
  
  $('body').append(outerShell);





});