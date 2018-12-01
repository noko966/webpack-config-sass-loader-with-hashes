import t from './index.scss';

var div2 = document.createElement('div');
div2.innerHTML = 'hola';
console.dir(t)
div2.className = t.cont2;

document.body.appendChild(div2);