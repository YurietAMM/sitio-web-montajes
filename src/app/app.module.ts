import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

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
import { ContactanosComponent } from './Pages/contactanos/contactanos.component';
import { HistoriaComponent } from './Components/historia/historia.component';
import { MisionComponent } from './Components/mision/mision.component';
import { VisionComponent } from './Components/vision/vision.component';

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
    BotonWhatsappComponent,
    ContactanosComponent,
    HistoriaComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
