$(document).ready(function(){

	var animations=['shake', 'shake2'];

	function getRandomNumber(min, max){

		return Math.floor(Math.random()*(max-min+1)+ min );
	}//end of function

	$("#sushi2").on("click", function(){ 
		var sushi=this;
		var animation=animations[getRandomNumber(0,1)];

		$(sushi).addClass(animation);
		console.log("sushi: ", sushi, " animation ", animation );

		setTimeout( function(){ $(sushi).removeClass(animation); }, 2100);

	} );
//typing
});
