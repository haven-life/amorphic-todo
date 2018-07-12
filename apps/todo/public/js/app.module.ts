import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatListModule } from '@angular/material/list';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ BrowserModule, MatListModule ],
    declarations: [ AppComponent ],
})
export class AppModule {

}