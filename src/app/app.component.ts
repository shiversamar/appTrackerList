import { Component } from '@angular/core';

@Component({
    selector: 'mh-root',
    template: `
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{pageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/movies']">Requirement List</a></li>
                    <li><a [routerLink]="['/movies', 0, 'edit']">Add Requirement</a></li>
                    <li><a [routerLink]="['/signup']">Sign Up</a></li>
                    <li><a [routerLink]="['/login']">Log In</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>
     `

     
})
export class AppComponent {
    pageTitle: string = '';
}
