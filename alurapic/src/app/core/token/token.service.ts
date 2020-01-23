import { Injectable } from "@angular/core";

const KEY = 'authToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken() {        
        /*  TRUQUE JAVASCRIPT
            - Se o retorno for NULL, o primeiro ! troca para true e o segundo ! troca para false
            - Caso contrátio, Se o retorno tiver valor, o primeiro ! troca para false e o 
              segundo ! troca para true
        */
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

}