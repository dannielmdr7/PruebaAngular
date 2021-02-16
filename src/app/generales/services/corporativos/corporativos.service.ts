import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.dev';
import { Observable } from 'rxjs';
import { CorporativoModel } from '../../models/corporativos/corporativo.model';


@Injectable({
  providedIn: 'root'
})
export class CorporativosService {

  constructor( private http:HttpClient ) {}

  public listCorporativos():Observable<CorporativoModel>{
    let url=environment.apiURL + '/corporativos';
    return this.http.get<CorporativoModel>(url);
  };
  
  public getCorporativo(id:number):Observable<any>{
    let url=environment.apiURL + '/corporativos/'+id;
    return this.http.get(url);
  };

  public deleteContacto(id:number){
    let url=environment.apiURL + '/contactos/'+id;
    return this.http.delete(url);
  }
  public updateContacto(contacto){
    let url=environment.apiURL + '/contactos/'+contacto.id;
    return this.http.put(url,contacto);
  }
  
  
}
