function animateValue(cls, start, end, duration) {
	var range = end - start;
	var current = start;
	var increment = end > start ? 1 : -1;
	var stepTime = Math.abs(Math.floor(duration / range));
	var obj = document.querySelectorAll('.' + cls);

	obj.forEach(element => {
		var timer = setInterval(function () {
			current += increment;
			element.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);
	});
}

const infra = () => {
	let infra = document.getElementById('infraWrapper'), html = '';

	for (let i = 0; i <= 7; i++) {
		html += '<div class="col-md-4 mt-4">';
		html += '<div class="bg-white infraItem">';
		html += '<img src="img/infra/frame_' + i + '_delay-2s.jpg" class="img-fluid" alt="">';
		html += '<div class="p-4">';
		html += '<h4 class="text-primary mb-4">Library</h4>';
		html += '<p>A well designed reading area which facilitates extra learning to the students and teachers through Magazines, Periodicals, Journals & latest books.</p>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
	}

	infra.innerHTML = html;
}

function Utils() { }

Utils.prototype = {
	constructor: Utils,
	isElementInView: function (element, fullyInView) {
		var pageTop = $(window).scrollTop();
		var pageBottom = pageTop + $(window).height();
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		if (fullyInView === true) {
			return ((pageTop < elementTop) && (pageBottom > elementBottom));
		} else {
			return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
		}
	}
};

var Utils = new Utils();

var isShownAlready = false;

document.addEventListener('scroll', function (e) {
	var isElementInView = Utils.isElementInView($('#number_runner'), false);
	if (isElementInView && !isShownAlready) {
		setTimeout(() => {
			animateValue('percentage', 0, 100, 2000);
			animateValue('people', 0, 80, 2000);
			animateValue('students', 1500, 1600, 2000);
			animateValue('years', 0, 60, 2000);
		}, 1000);
		isShownAlready = true;
	}
});