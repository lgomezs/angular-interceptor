import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _usuarioService:UsuarioService
  ) { }

  public getToken(){
    return this._usuarioService.token;
  }

public isAuthenticated():boolean{
  const token = this.getToken;
  if(this._usuarioService.verLogueado) return true;
  return false;
}

}
