for (var i = 0; i < 3; i++) {
	setTimeout(function(){
		console.log(new Date(),j);
	},j*1000);
}


for (var i = 0; i < 3; i++) {
	(function(j){
		setTimeout(function(){
			console.log(new Date(),j);
		},j*1000);
	})(i)
}