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
    email: '',
    amount: 0
  };

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.donation.amount = amount;
  }

  submitDonation() {
    console.log(this.donation);
    alert('Merci pour votre soutien 💙');
  }

}
