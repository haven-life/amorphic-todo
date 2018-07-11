import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor () {
        console.log('Angular!');
    }
}