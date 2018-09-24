import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
//import {Http,Response,Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario;
  token:string;

  array:Usuario[]=[];

  constructor(
    public _http:HttpClient,
    private _router:Router   
  ) { 
    
    this.cargarStorage();
  }

  public cargarStorage(){
    if(localStorage.getItem('token')!=null){
      this.token= localStorage.getItem('token');
    }
  }

  public login(usuario:Usuario) {
    let URL=URL_SERVICES+'login';
   
    return this._http.get(URL).pipe(
      map((res: any) => {  
          this.usuario= res;    
          this.guardarStorage(this.usuario.token,this.usuario);
          return usuario;
        }  
      )
    );

  }

  public logout(){
    this.usuario=null;
    this.token=null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  public guardarStorage(token:string,usuario:Usuario){
    console.log("guardao en el storage ");
    localStorage.setItem('token',token);
    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.token=token;
    this.usuario=usuario;
  }

  public verLogueado():boolean{
    if(this.token.length>5 && !this.usuario)
       return true;
    return false;
  }

}
