
$(document).ready(function () {
	$("form").submit(function(e) { 
		e.preventDefault();
		var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var searchWord = document.getElementById("query").value;
		var flickrOptions = {
			tags: searchWord,
			format: "json"
		};
		function displayPhotos(data) {

			var photoHTML = '<ul style="list-style-type: none;">';
			$.each( data.items, function (i, photo) {
				photoHTML += '<li class="awesomePhoto">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
			
			var $container = $('#photos').isotope({
  					itemSelector: '.awesomePhoto',
  					layoutMode: 'fitRows' 
				}).fadein(slow);

				$container.imagesLoaded ( function() {
  				$container.isotope('fitRows');
				});
  			
		};
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
			
	});
});