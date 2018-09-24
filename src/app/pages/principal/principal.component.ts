import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/productos/producto.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../interceptor/tokenInterceptor';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    public _productoService:ProductoService
  ) { }

  ngOnInit() {
  }


  callListaProductos(){

    this._productoService.listaProductos().subscribe(
      resultado=>{
          console.log(resultado);
      },
      err => console.log(err)
    );

  }


}
