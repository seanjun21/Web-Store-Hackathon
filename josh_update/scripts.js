
	$('#productModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var selectedProduct = button.data('product') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)

		for (var productCategory in products) {
			for (var j = 0; j < products[productCategory].length; j++) {
				if (products[productCategory][j].tag === selectedProduct) {
					modal.find('.modal_genre ul').empty();
					modal.find('.modal_features ul').empty();
					modal.find('.modal-title').text(products[productCategory][j].name);
					modal.find('.modal_image').attr('src', products[productCategory][j].img);
					modal.find('.modal_price').html('<h3>Price: ' + products[productCategory][j].price);
					var tagString = "";
					for (var k = 0; k < products[productCategory][j].genre.length; k++) {
						if (k === products[productCategory][j].genre.length - 1) {
							tagString += '<li><a>' + products[productCategory][j].genre[k] + '</a>';
							// modal.find('.modal_genre ul').append('<li></li>');
							// modal.find('.modal_genre ul li:last-child').html('<li><a href="#">' + products[productCategory][j].genre[k] + '</a>, &nbsp;</li>');
							// console.log(products[productCategory][j].genre[k]);
							// console.log(k);
						} else {
							tagString += '<li><a>' + products[productCategory][j].genre[k] + '</a>,&nbsp;';
							// modal.find('.modal_genre ul').append('<li></li>');
							// modal.find('.modal_genre ul:last-child').html('<li><a href="#">' + products[productCategory][j].genre[k] + '</a></li>');
						}
					}
					modal.find('.modal_genre ul').html(tagString);
					for (var l = 0; l < products[productCategory][j].features.length; l++) {
						modal.find('.modal_features ul').append('<li>' + products[productCategory][j].features[l] + '</li>')
					}
				}
			}
		}
	});
	var buildPage = function() {
		for (var category in products) {
			$('.dropdown-menu').append('<li class=\'' + category + '_button\'><a>' + category.capitalizeFirstLetter() + '</a></li>')
			$('.content').append('<div class="row ' + category + '_row"><div class="col-md-12"><div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + category.capitalizeFirstLetter() + '</h3></div><div class="panel-body ' + category +'"></div></div></div></div>')

			for (var i = 0; i < products[category].length; i++) {
				$('.' + category).append('<div class="col-md-2"><div class="panel panel-default" data-toggle="modal" data-target="#productModal" data-product="' + products[category][i].tag.toLowerCase() + '"><div class="panel-heading title">' + products[category][i].name.capitalizeFirstLetter() + '</div><div class="panel-body"><img src="' + products[category][i].img + '"></div></div></div>')
			}
		}
	}

	$(".dropdown-menu").on('click', 'li a', function(){
		var selected = $(this).text().toLowerCase();
		console.log(selected);
		if (selected === 'all items') {
			for (var keyList in products) {
				$('.' + keyList + '_row').show();
			}		
		} else {
	     	for (var list in products) {
	     		if(selected === list) {
	     			$('.' + selected + '_row').show();
	     		} else {
	     			$('.' + list + '_row').hide();
	     		}

	     	}
     	}
   });
	
	String.prototype.capitalizeFirstLetter = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}

	var products = {
		movies: [
			hackers = {
				tag: 'hackers',
				name: 'Hackers',
				img: 'http://ia.media-imdb.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_SX640_SY720_.jpg',
				genre: ['Comedy', 'Crime', 'Drama'],
				price: '$10.99',
				features: ['Good buy!', 'Closed Captioning Provided', 'Hack the Planet!', 'Runtime 107 minutes', 'Rated Pg-13', 'Released on Sept. 15, 1995'],
			},
			theMatrix = {
				tag: 'the_matrix',
				name: 'The Matrix',
				img: 'http://iv1.lisimg.com/image/156840/380full-matrix-cover.jpg',
				genre: ['Action', 'Sci-Fi'],
				price: '$10.99',
				features: ['Extra Special Good Buy!', 'Closed Captioning Provided', 'There is No Spoon', 'Runtime 136 minutes', 'Released on March 31, 1999'],
			},
			theSocialNetwork = {
				tag: 'the_social_network',
				name: 'The Social Network',
				img: 'http://ia.media-imdb.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1__SX1857_SY1033_.jpg',
				genre: ['Biography', 'Drama'],
				price: '$10.99',
				features: ['Deleted Scenes', 'Great buy!', 'Closed Captioning Provided', 'Runtime is 120 minutes', 'Released on October 1, 2010']
			}
		],
		albums: [
			purpleRain = {
				tag: 'purple_rain',
				name: 'Purple Rain',
				img: 'http://ecx.images-amazon.com/images/I/71EO7kQUfWL._SX522_.jpg',
				genre: ['Pop', 'R&B', 'Rock', 'Funk', 'New-Wave', 'Psychedelia'],
				price: '$5.99',
				features: ['Album for the film \'Purple Rain\' by Prince', 'Runtime 111 minutes', 'Released on June 25, 1984'],
			},
			mouthToMouth = {
				tag: 'mouth_to_mouth',
				name: 'Mouth to Mouth',
				img: 'https://upload.wikimedia.org/wikipedia/en/d/da/Lippsmouthtomouth.jpg',
				genre: ['Funk', 'Disco'],
				price: '$5.99',
				features: ['Album by Lipps, Inc.', 'Runtime 30 minutes', 'Released in November of 1979'],
			},
		],
		electronics: [
			nvidia980TI = {
				tag: '980ti',
				name: 'Nvidia GTX 980ti',
				img: 'http://techreport.com/r.x/geforce-gtx-980ti/card-front-flat.jpg',
				genre: ['EVGA', 'MSI', 'Zotac'],
				price: '$538.00',
				features: ['Base Clock: 980MHz', '3072MB GDDR5 384bit Memory', 'PCI Express 3.0'],
			}
		]
	};

	buildPage();