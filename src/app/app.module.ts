import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './pages/principal/principal.component';
//import {HttpModule} from '@angular/http';
import {appRoutingProviders , routing } from './app.routing';
import { LoginComponent } from './login/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/tokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,        
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
    routing    
  ],
  providers: [     
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      } ,
      appRoutingProviders,    
      AuthService , 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
