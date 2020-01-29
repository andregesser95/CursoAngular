import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { SignUpComponent } from './signup/signup.component';
import { SignInCompoent } from './signin/signin.component';

@NgModule({
    declarations: [
        SignInCompoent,
        SignUpComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule {

}