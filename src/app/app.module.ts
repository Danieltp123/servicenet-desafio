import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';


import { HttpModule } from '@angular/http';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CrudComponent } from './crud/crud.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

import { CreateService } from './create/create.service';
 
 
// AF2 Settings


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CrudComponent,
    CreateComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
  ],
  providers: [
    CreateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
