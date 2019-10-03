import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Ejercicio1Component,
    HomecomponentComponent,
    TopBarComponent,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomecomponentComponent },
      { path: 'ejercicio1', component: Ejercicio1Component },
      { path: 'ejercicio2', component: Ejercicio2Component },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
