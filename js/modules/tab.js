import {htmlToDOM} from '../utils';

/*

 Some doc info here

 */

class TabComponent {
	constructor(element) {
		this.element = element;
		this.render();
	}

	render() {
		document.body.appendChild(htmlToDOM(this.element));
	}
}

export default TabComponent;