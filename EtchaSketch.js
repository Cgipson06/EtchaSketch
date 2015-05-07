//Set up the initial grid of div 
numOfSquares = 16;
count = 0;  
containerDimensions= 400;

$(document).ready( function () {

	$('body').append('<button type="button">Reset the sceen</button>');
	$('body').append('<div id="container"></div>');
	

	function display() {
		while (count<numOfSquares) {
			count+=1;
			$('#container').append('<div class = "screen" id="row'+count + '"></div>');
			count1=0;
			while (count1<numOfSquares) {
				$('#row'+count).append ('<div class = "screen">');
				count1+=1;
			};
		};
	};
	display();
//Reset the screen after clicking the reset button	
	
	$(document).on('click',':button', function screenReset() {
		numOfSquares= prompt("Please input the size of the new screen.","16");
		$('#container').empty();
		$(".screen").css('background-color','#454343');
		dimension = 500/numOfSquares;
		console.log(dimension);
		count=0;
		display();
		$(".screen").css('height',dimension);		
		$(".screen").css('width',dimension);
		shader();
	});
	
//Basic shading of the pixel we hover over
	function shader() {
		$('.screen').hover(function () {
			$(this).css('background-color', "#000");
		//this should be changed to opacity and gradually lightened to show the black background more and more.
		});
	};
	shader();
	
	

//Append the footer 
	$('body').append('<footer><p><small>Made by Cody Gipson</small></p></footer>');

});
	

