 import _ from 'lodash';
 import printMe from './print.js';
function component() {
  let element = document.createElement('div');
	 var btn = document.createElement('button');

  element.innerHTML = _.join(['aHellossyyyccww', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
console.log(module.hot+'zz');
if (module.hot) {
    module.hot.accept('./print.js', function() {
       console.log('xxxAccepting the updated printMe module!');
       printMe();
     })
    }