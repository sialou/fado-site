import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonatePageComponent {

  selectedAmount: number = 0;


donation = {
  name: '',
  phone: '',
  amount: null
};

sendEmail() {

  if (!this.donation.name || 
      !this.donation.phone || 
      !this.donation.amount) {

    alert("Veuillez remplir tous les champs avant d’envoyer votre demande.");
    return;
  }

  if (this.donation.amount <= 0) {
    alert("Veuillez entrer un montant valide.");
    return;
  }

  const phoneRegex = /^[0-9+\s]{8,15}$/;

  if (!phoneRegex.test(this.donation.phone)) {
    alert("Veuillez entrer un numéro de téléphone valide.");
    return;
  }

  const subject = "Demande de don - Fondation FADO";

  const body = `
Nom : ${this.donation.name}
Téléphone : ${this.donation.phone}
Montant souhaité : ${this.donation.amount} FCFA
  `;

  window.location.href =
    `mailto:contact@fondation-fado.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}



}
