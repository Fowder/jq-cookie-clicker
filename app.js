var obj = {
	0 : "Achete toi une vie !",
	1 : "Arrête ça !",
	2 : "Rentre chez toi !"
};

var image = $('.cake-is-a-lie');
function clic (){
	image.click(function(){
		var alea = 0+Math.floor(Math.random()*3);
		var compter = $('#compte').text();
		compter++;
		$('#compte').html(compter);
		var a = 20;
		var multiple = compter % a;
		if (multiple == 0){
		alert(obj[alea]);
	}
	})
}

$(document).ready(function(){
	
clic();

});