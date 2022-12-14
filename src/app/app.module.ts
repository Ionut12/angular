import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SelectorComponent } from './selector/selector.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { List1Component } from './list1/list1.component';
import { AddTreabaComponent } from './add-treaba/add-treaba.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SelectorComponent,
    AddPersonComponent,
    List1Component,
    AddTreabaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
