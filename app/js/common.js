$(document).ready(function() {
	var imgData = [
		{
			src: 'img/01.jpg',
			srcThumbnail: 'img/thumbnails/01.jpg',
			dataTitle: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
			dataAlt: 'Hay Bales',
		},

		{
			src: 'img/02.jpg',
			srcThumbnail: 'img/thumbnails/02.jpg',
			dataTitle: 'The lake was so calm today. We had a great view of the snow on the mountains from here',
			dataAlt: 'Lake',
		},

		{
			src: 'img/03.jpg',
			srcThumbnail: 'img/thumbnails/03.jpg',
			dataTitle: 'I hiked to the top of the mountain and got this picture of the canyon and trees below',
			dataAlt: 'Canyon',
		},

		{
			src: 'img/04.jpg',
			srcThumbnail: 'img/thumbnails/04.jpg',
			dataTitle: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
			dataAlt: 'Iceberg',
		},

		{
			src: 'img/05.jpg',
			srcThumbnail: 'img/thumbnails/05.jpg',
			dataTitle:
				'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
			dataAlt: 'Desert',
		},

		{
			src: 'img/06.jpg',
			srcThumbnail: 'img/thumbnails/06.jpg',
			dataTitle: 'Fall is coming, I love when the leaves on the trees start to change color.',
			dataAlt: 'Fall',
		},

		{
			src: 'img/07.jpg',
			srcThumbnail: 'img/thumbnails/07.jpg',
			dataTitle: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
			dataAlt: 'Hay Bales',
		},

		{
			src: 'img/08.jpg',
			srcThumbnail: 'img/thumbnails/08.jpg',
			dataTitle: 'I drove past this plantation yesterday, everything is so green!',
			dataAlt: 'Plantation',
		},

		{
			src: 'img/09.jpg',
			srcThumbnail: 'img/thumbnails/09.jpg',
			dataTitle: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
			dataAlt: 'Countryside Lane',
		},

		{
			src: 'img/10.jpg',
			srcThumbnail: 'img/thumbnails/10.jpg',
			dataTitle: 'Sunset at the coast! The sky turned a lovely shade of orange.',
			dataAlt: 'Sunset',
		},

		{
			src: 'img/11.jpg',
			srcThumbnail: 'img/thumbnails/11.jpg',
			dataTitle: 'I did a tour of a cave today and the view of the landscape below was breathtaking.',
			dataAlt: 'Cave',
		},

		{
			src: 'img/12.jpg',
			srcThumbnail: 'img/thumbnails/12.jpg',
			dataTitle:
				'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
			dataAlt: 'Bluebells',
		},
	];

	var photoList = document.querySelector('#photo-section');
	var search = document.querySelector('#search');

	/**
	 * @function
	 * @description Renders image list
	 * @param {array} data
	 */
	function renderImageList (data) {
		data.forEach(element => {
			var tempString = `<a href="${element.src}" class="photo__link" data-lightbox="gallery" data-title="${
				element.dataTitle
			}">
                                 <img class="photo__img" src="${element.srcThumbnail}" alt="${element.dataAlt}" />
                              </a>`;
			photoList.insertAdjacentHTML('beforeEnd', tempString);
		});
    }
    
     // filter search
	search.addEventListener('keyup', function(event) {
		var searchString = search.value.toLowerCase();
		var filtered = imgData.filter(function(element) {
			var pattern = new RegExp(searchString);
			return pattern.test(element.dataTitle);
		});
		photoList.innerHTML = '';
		renderImageList(filtered);
	});

	// init
    renderImageList(imgData);
    
});
