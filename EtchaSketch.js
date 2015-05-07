//Set up the initial grid of div 
numOfSquares = 16;// size of the array
count = 0;  //increment variable also used to name div id's
$(document).ready( function () {
	
	$('body').append('<div id="container"></div>');
	//Double loop to make a grid and name the id's and class
	while (count<numOfSquares) {
			count+=1;
			$('#container').append('<div class = "screen" id="row'+count + '"></div>');
		
			count1=0;
			while (count1<numOfSquares) {
				$('#row'+count).append ('<div class = "screen">');
				count1+=1;
			};
		};
		
	//Basic shading of the pixel we hover over
	$('.screen').hover(function () {
		$(this).css('background-color', "#000");
		//this should be changed to opacity and gradually lightened to show the black background more and more.
	});
	
	//Append the footer here because I had trouble displaying the footer at the bottom.
	$('body').append('<footer><p><small>Made by Cody Gipson</small></p></footer>');
});
	

