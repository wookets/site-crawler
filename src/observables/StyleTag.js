
import { Subject } from 'rxjs'

export default class StyleTagObservable extends Subject {

	constructor () {
		super()
	}

	selector (document) {
		return document.querySelectorAll('style')
	}

}