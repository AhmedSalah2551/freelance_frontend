import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  private url = 'https://freelance-api-pi.vercel.app/services/';

  constructor(private http: HttpClient) {}

  create(service: any){
    return this.http.post( this.url + 'create'  , service );
  }

  getAllServices(){
    return this.http.get( this.url )
  }

  getServiceById( id: any ){
    return this.http.get( this.url + id );
  }

  getMyServices( id: any ){
    return this.http.get( this.url + 'my/' + id );
  }


  deleteService( id: any ){
    return this.http.delete( this.url + id );
  }
}
