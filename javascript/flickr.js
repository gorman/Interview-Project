
$(document).ready(function () {
	$('button').click(function () {
		var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var searchWord = document.getElementById("query").value
		var Options = {
			tags: searchWord
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each( data.items, function (i, photo) {
				photoHTML += '<li class="awesomePhoto">'
				photoHTML += '<a href="' + photo.link + '" class="image">'
				photoHTML += '<img src="' + photo.media.m + '"></a></li>'
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		};
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
	});	// end click
});	// end ready