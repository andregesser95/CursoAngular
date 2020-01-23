import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    /* O $ significa que a propriedade vai guardar um valor de um "Observable" */
    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
    }

}