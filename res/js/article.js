(function() {
	/** Hydrating page if data is found, displaying 404 if not */
	const id = new URL(location).searchParams.get('id');
	const data = reviews.find(e => e.id === id);
	if (!data) {
		const notFound = document.createElement('div');
		notFound.classList.add('not-found');
		notFound.innerHTML = '<h1>404 - Not found</h1>' +
			'<p>The article you are searching for doesn\'t</p>' +
			'<p>You can go back <a href="index.html">Home</a> or <a href="aricles.html">check out our other articles</a>.</p>'
		document.body.innerHTML = '';
		document.body.appendChild(notFound);
		return;
	}
	document.querySelector('h1').textContent = data.name;
	document.querySelector('.header-park-infos #location span').textContent = data.location;
	document.querySelector('.header-park-infos #area span').textContent = data.area + 'ha';
	document.querySelector('.header-park-infos #walk span').textContent = data.duration + 'min';
	document.querySelector('.article-header').style.backgroundImage = `url(${data.splashart})`;
	document.querySelector('section.introduction').textContent = data.introduction;
	document.querySelector('.header-rating span').textContent = data.grade;

	const converter = new showdown.Converter();
	document.querySelector('section.article').innerHTML = converter.makeHtml(data.article);

	/** Add related aricles randomly */
	const relatedContainer = document.querySelector('.related-articles-list');
	for (let i = 0; i < 3; i++) {
		const article = reviews[Math.floor(Math.random() * reviews.length)];
		const card = document.createElement('a');
		card.href = 'article.html?id=' + article.id;
		card.classList.add('article-card');
		card.innerHTML = `<div class='article-card-top-text'><div class='article-card-grade'>${article.grade}</div><div class='article-card-location'>${article.location}</div></div>`
		+ `<div class='article-card-name'>${article.name}</div>`;
		card.style.backgroundImage = `url(${article.splashart})`;
		relatedContainer.appendChild(card);
	}


	/** Table of contents generation */

	const headingElements = Array.from(document.querySelectorAll('h2,h3,h4'));

	/* Add ids for anchor links */
	for (const elm of headingElements) {
		elm.id = elm.innerText.replace(/ |\W/g, '-').toLowerCase();
	}

	const nav = document.querySelector('#summary #links');
	const navContainer = document.querySelector('#summary');
	const links = [];

	for (const elm of headingElements) {
		const link = document.createElement('a');
		link.innerText = elm.innerText;
		link.className = elm.tagName.toLowerCase();
		link.href = '#' + elm.id;
		nav.appendChild(link);
		links.push(link);
	}

	const toggle = document.querySelector('#toggle-links');

	toggle.addEventListener('click', () => {
		navContainer.classList.toggle('collapsed');
	});
})();