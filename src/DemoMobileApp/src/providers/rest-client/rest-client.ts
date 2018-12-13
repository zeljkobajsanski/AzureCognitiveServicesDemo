import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestClientProvider {

  constructor(public http: HttpClient) {
    
  }

  translateText(text, toLang) {
    

    return this.http.post<any[]>('https://api.cognitive.microsofttranslator.com/translate', [{text}]);
  }

}
