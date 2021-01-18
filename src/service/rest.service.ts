import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + btoa('wc-admin@cstechsolutions.com.sg:Happy$$123')
		})
	};

	constructor(private http: HttpClient) { }

	getCurLivePollItem(): Observable<any> {
		console.log('Request getCurLivePollItem is sent!');
		return this.http.get('https://eagm.cstechsolutions.com.sg/api/cur_live_poll_item/', this.httpOptions);
	}

	getLivePollStatus(): Observable<any> {
		console.log('Request getLivePollStatus is sent!');
		return this.http.get('https://eagm.cstechsolutions.com.sg/api/live_poll_status/', this.httpOptions);
	}
}