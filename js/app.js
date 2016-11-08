import Tab from './modules/tab';

class App {
	constructor() {
		this._sth();
	}

	//do something
	_sth() {
		const tab = new Tab('<span>This is tab</span>');
		console.log('from app _sth');
	}
}

export default App;