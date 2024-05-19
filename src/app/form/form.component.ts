import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink,FormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nom: string='Ibtihel ayari';
  age : number=35;
  adresse:string='chez moi ou autre part :)';

  getName(){return this.nom}
  /*modifier(newName){
    this.nom=newName;
  }*/

}
