import {Injectable} from '@angular/core';
import{Http,Response,Headers,RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CommentService
{
	constructor(private http:Http){}
	private commentUrl: string = 'http://localhost:4200/comments.json';

	// Fetch all existing comments
	getComments(): Observable<Comment[]> {

		// ...using get request
		return this.http.get(this.commentUrl)
			// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	}

	addComment(body: Object): Observable<Comment[]> {
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.put(this.commentUrl, body, options) // ...using post request
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}

	// Update a comment
	updateComment(body: Object): Observable<Comment[]> {
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.put(`${this.commentUrl}/${body['id']}/`, body, options) // ...using put request
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}   

	getCommentsPromise(): Promise<Comment[]> {

		// ...using get request
		return this.http.get(this.commentUrl).toPromise()
			// ...and calling .json() on the response to return data
			.then(response => response.json()as Comment[])
			

	}
}