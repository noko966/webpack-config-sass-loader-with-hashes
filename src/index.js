import Div from './components/component1'
import Div2 from './components/component2'
import './style.scss'
// import printMe from './components/component1/index.js'
// import './components/component2'

var div = document.createElement('div');
div.innerHTML = 'hello';

document.body.appendChild(div);

//  if (module.hot) {
//  module.hot.accept('./components/component1/index.js', function() {
//    console.log('Accepting the updated printMe module!');
//    printMe();
//  })
// }