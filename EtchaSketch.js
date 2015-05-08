$(document).ready( function () {
	var numOfSquares = 16;
	var count = 0;  



	$('body').append('<button type="button" id="button">Reset the sceen</button>');
	$('body').append('<div id="container"></div>');


	function display() {
		while (count<numOfSquares) {
			count+=1;
			$('#container').append('<div class = "screen" id="row'+count + '"></div>');
			var count1=0;
			while (count1<numOfSquares) {
				$('#row'+count).append ('<div class = "screen">');
				count1+=1;
			}
		}
	}
	display();
	$(document).on('click',':button', function screenReset() {
		numOfSquares= prompt("Please input the size of the new screen. 1 - 128","16");
		while (numOfSquares<1 || numOfSquares >128) {
			numOfSquares= prompt("Please input the size of the new screen.1 - 128","16");
		}
		$('#container').empty();
		$(".screen").css('background-color','#454343');
		var dimension = 500/numOfSquares;
		count=0;
		display();
		$(".screen").css('height',dimension);		
		$(".screen").css('width',dimension);
		shader();
	});
	function shader() {
		$('.screen').hover(function () {
			$(this).css('background-color', "#000");
		});
	}
	shader();
	$('body').append('<footer><p><small>CGipson 2015</small></p></footer>');
});
	

