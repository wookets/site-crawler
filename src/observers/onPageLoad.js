
import { load } from 'cheerio'


/**
 * After a page is crawled, we end up here with the raw dom for cheerio to parse and create new subjects using 
 * either the built-in observers or user defined observers.
 * 
 * @param {url} url The url of the document that was loaded
 * @param {string} content A raw string of html
 * @param {array of observables} observables An array of observables that has a selector function we will use to find specific tags in the html doc
 */
export default function onPageLoad (url, content, observables) {
	const $ = load(content)

	observables.forEach( (observable) => {
		observable.selector($).each( (i, e) => {
			observable.next($(e))
		})
	})

}