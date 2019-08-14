import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export enum SearchType
{

 all='posts',

}

interface MediaG {
    id: string;
    source_url:string;

}


@Injectable({
  providedIn: 'root'
})

export class ApiWService {


  url= 'http://www.dotusnews.com/wp-json/wp/v2'

  constructor(private http: HttpClient) { }

  getPost(type: string ): Observable<any>  {

    console.log('TIPO OBTenido:', type);
    return this.http.get(`${this.url}/${type}`).pipe(
      map(results => {
        console.log('RAW:', results);
        return results;
      })
    );

  }

  getMedia(id: string ): Observable<any>  {

  //  console.log('id media OBTenido:', id);
   return this.http.get(`${this.url}/media${id}`).pipe(
     map(res => {
       console.log('RAW Media:', res);
       return res;
     })
   );

  }


  getDetailsPost(id)
  {return this.http.get(`${this.url}/posts/${id}`);
  }

}
