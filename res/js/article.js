const headingElements = Array.from(document.querySelectorAll('h2,h3,h4'));

/* Add ids for anchor links */
for (const elm of headingElements) {
	elm.id = elm.innerText.replace(/ |\W/g,'-').toLowerCase();
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
