import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 
import { FormsModule } from '@angular/forms';
import localeES from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BlognuevoComponent } from './blognuevo/blognuevo.component';
registerLocaleData(localeES, 'es')

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    InicioComponent,
    BlognuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
