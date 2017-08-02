var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));

searchBox.addListener('places_changed', function() {
	var locale = searchBox.getPlaces()[0];

	document.querySelector("#latitude").value = place.geometry.location.lat();
	document.querySelector("#longitude").value = place.geometry.location.lng();

	$(document).ready(function() {

		$.getJSON('https://api.darksky.net/forecast/1b0d69d33a5c8c064c8d249d677e7f7e/37.8267,-122.4233', function(forecast){
			console.log(forecast);
		});

	});

});








/*
$.ajax({
	url: 'https://api.darksky.net/forecast/1b0d69d33a5c8c064c8d249d677e7f7e/37.8267,-122.4233',
	type: 'GET',
	dataType: 'json',
})
.done(function(x) {
	console.log(x.actualmente);
})
.fail(function() {
	console.log("error");
});


});



/*var flickr = new Flickr({
  api_key: "ab4d274c1f5f60125d3d9a36998283ce"
});

flickr.photos.search({
  text: "red+panda"
}, function(err, result) {
  if(err) { throw new Error(err); }
  // do something with result
}



/*

var apiKey='ab4d274c1f5f60125d3d9a36998283ce';

$.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=72157619415192530&amp;format=json&amp;jsoncallback=?';








*/
//Fondo app
function pantalla(){
	$.ajax({
		url: 'https://up.flickr.com/services/rest/',
		type: 'GET',
		datatype: 'json',
		data: {
			method:"flickr.photos.search"
			api_key: 'ab4d274c1f5f60125d3d9a36998283ce',
			format:'jpg',
		}
	})
	.done(function(x){
		console.log(x);
		$('fondo').append(x)
	})
	.fail(function(){
		console.log("error");
	});
}


/*


$.ajax({
	url: 'Https://api.darksky.net/forecast/1b0d69d33a5c8c064c8d249d677e7f7e/[latitude],[longitud]',
	type: 'default GET (Other values: POST)',
	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
	data: {param1: 'value1'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
});