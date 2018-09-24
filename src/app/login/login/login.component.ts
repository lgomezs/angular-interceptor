import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string;
  usuario:Usuario;

  constructor(
      public _router:Router,
      public _usuarioService:UsuarioService
    ){
      this.title="Login - Uso de interceptores.";
  }

  ngOnInit() {
  }

  login(form:NgForm){
    
    if(form.valid){
    
        let usuario = new Usuario(form.value.login,form.value.password,'','ADMIN');

        this._usuarioService.login(usuario).subscribe(
          resultado=>{            
             this._router.navigate(['/principal']);
          }
        );
    }
  }
}
