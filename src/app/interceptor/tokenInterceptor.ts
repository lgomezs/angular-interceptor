import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
   
    constructor(
        public _authService:AuthService
    ){}

   
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {     
        console.log("entre al interceptor : " + this._authService.getToken());  
        request = request.clone({
            setHeaders: {
              Authorization: `${this._authService.getToken()}`
            }
          });
          return next.handle(request);
    }

}
