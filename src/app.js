import { sum } from './public/javascripts/sum.js';
import catImage from './public/images/cat.png';
import './public/stylesheets/styles.sass';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1> 2 + 2 = ${sum(2, 2)} </h1>
        <img src="${catImage}">
    `;
});
