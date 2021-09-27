import {sum} from './public/javascripts/sum.js';
import catImage from './public/images/cat.png';
import './public/stylesheets/foo.scss';

window.addEventListener('DOMContentLoaded', () => {
	const el = document.querySelector('#app');
	el.innerHTML = `
        <h1> 1 + 3 = ${sum(1, 3)} </h1>
        <img src="${catImage}">
    `;
});
