import { Component } from '@angular/core';

@Component({
    selector: 'todo',
    template: '<h1>Hello World!</h1>'
})
export class AppComponent {
    constructor () {
        console.log('Angular!');
    }
}