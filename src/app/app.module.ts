import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterService } from './register.service';
import { FliterlistPipe } from './fliterlist.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, FliterlistPipe ],
  bootstrap:    [ AppComponent ],
  providers: [RegisterService]
})
export class AppModule { }
