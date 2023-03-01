import { Component, Input } from '@angular/core';

import { Mensaje } from '../../interface/mensaje';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  @Input() DatosEmail : Mensaje = {nombre: '', correo: '', mensaje: ''};

  EnviarEmail() {
    const btnMail = document.getElementById("btnMail");
    btnMail?.setAttribute('href', `mailto:administracion@montajesjig.com.co?subject=nombre: ${this.DatosEmail.nombre} - correo: ${this.DatosEmail.correo}&body=${this.DatosEmail.mensaje}`);
    btnMail?.click();
  }

}
