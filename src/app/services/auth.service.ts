import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }
  readonly httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE' })
	};
  cachedRequests: Array<HttpRequest<any>> = [];
  public collectFailedRequest(request: HttpRequest<any>): void {
      this.cachedRequests.push(request);
    }
  public retryFailedRequests(): void {
      // retry the requests. this method can
      // be called after the token is refreshed
    }
  signinUser(credentiel: any): Observable<any> {
    return of({response:true,
            token:"123-user",
            username:'test',
          passeword: 'test'})
   // return this.http.post<any>('ws', credentiel, this.httpOptions)
  }
  getJwtToken() {
    return localStorage.getItem('token');
  }

 
   storeJwtToken(jwt: string) {
     console.log(jwt);
    localStorage.setItem('token', jwt);
  }

  logout() {
    return localStorage.removeItem('token');
  }

 
}

