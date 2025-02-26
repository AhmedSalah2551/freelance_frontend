import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {

  private url = 'https://freelance-api-pi.vercel.app/proposals/';

  constructor(private http: HttpClient) {}
  
  create( proposal: any ){
    return this.http.post( this.url + 'create' , proposal );
  }

  getProposalsByServiceId(id: any){
    return this.http.get(this.url + 'service/' + id);
  }

  getProposalsByUserId(id: any){
    return this.http.get(this.url + 'my/' + id);
  }

  deleteProposal(id: any){
    return this.http.delete(this.url + id);
  }

  acceptProposal(id: any){
    return this.http.put( this.url + id , {} )
  }

}
