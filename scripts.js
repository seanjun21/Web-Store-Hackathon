$('.all').click(function(){
	$('.albums').show();
	$('.movies').show();
})

$('.moviesButton').click(function(){
	$('.albums').hide();
	$('.movies').show();
})

$('.musicButton').click(function(){
	$('.movies').hide();
	$('.albums').show();
})

	// create a for loop to iterate over each of categorys in the products object
var buildPage = function() {
	for (var category in products) {
		// create a for loop to iterate over the indexes of the arrays sotred in the producst object categories
		for (var i = 0; i < products[category].length; i++) {
			$('.content').append('<div class=\'row ' + category + '\'><div class=\'col-md-2\'></div><div id=\'picture\' class=\'col-md-4\'><img src=\'' + products[category][i].img + '\'></div><div class=\'col-md-4\'><div class=\'panel panel-primary\'><div class=\'product panel-heading\'><h3 class=\'panel-title\'>' + products[category][i].name + '</h3></div><div class=\'panel-body\'><div id=\'genre\'>' + products[category][i].genre + '</div><div id=\'price\'>' + products[category][i].price + '</div><div id=\'sellingPoints\'><ul>' + products[category][i].features + '</ul></div></div></div></div><div class=\'col-md-2\'></div></div>');

		}
	}
}


var products = {
	movies: [
		hackers = {
			name: 'Hackers',
			img: 'http://ia.media-imdb.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_SX640_SY720_.jpg',
			genre: 'Comedy, Crime, Drama',
			price: '$10.99',
			features: '<li>Good buy!</li><li>Closed Captioning Provided</li><li>Hack the Planet!</li><li>Runtime 107 minutes</li><li>Rated Pg-13</li><li>Released on Sept. 15, 1995</li>'
		},
		theMatrix = {
			name: 'The Matrix',
			img: 'http://iv1.lisimg.com/image/156840/380full-matrix-cover.jpg',
			genre: 'Action, Sci-Fi',
			price: '$10.99',
			features: '<li>Extra Special</li><li>Good Buy!</li><li>Closed Captioning Provided</li><li>There is No Spoon</li></li>Runtime 136 minutes</li><li>Released on March 31, 1999</li>',
		}
	],
	albums: [
		purpleRain = {
			name: 'Purple Rain',
			img: 'http://ecx.images-amazon.com/images/I/71EO7kQUfWL._SX522_.jpg',
			genre: 'Pop, R&B, Rock, Funk, New-Wave, Psychedelia',
			price: '$5.99',
			features: '<li>Album for the film \'Purple Rain\' by Prince</li><li>Runtime 111 minutes</li><li>Released on June 25, 1984</li>',
		},
		mouthToMouth = {
			name: 'Mouth to Mouth',
			img: 'https://upload.wikimedia.org/wikipedia/en/d/da/Lippsmouthtomouth.jpg',
			genre: 'Funk, Disco',
			price: '$5.99',
			features: '<li>Album by Lipps, Inc.</li><li>Runtime 30 minutes</li><li>Released in November of 1979</li>'
		},
	],
};

buildPage();