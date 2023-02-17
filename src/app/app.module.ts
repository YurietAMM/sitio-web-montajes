import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuienesSomosComponent } from './Pages/quienes-somos/quienes-somos.component';
import { NuestrosServiciosComponent } from './Pages/nuestros-servicios/nuestros-servicios.component';
import { SaludoComponent } from './Components/saludo/saludo.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { BotonWhatsappComponent } from './Components/boton-whatsapp/boton-whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuienesSomosComponent,
    NuestrosServiciosComponent,
    SaludoComponent,
    ServiciosComponent,
    ClientesComponent,
    BotonWhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
