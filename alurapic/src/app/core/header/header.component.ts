import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    /* O $ significa que a propriedade vai guardar um valor de um "Observable" */
    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }

}