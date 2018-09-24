import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';
import { Productos } from '../../model/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:Productos;
  

  constructor(
    public _http:HttpClient,
  ) { }


  listaProductos(){
    let URL=URL_SERVICES+'productos';
    return this._http.get(URL).pipe(
      map((res: Response) => {    
          return this.productos;
        }  
      )
    );
  }

}
