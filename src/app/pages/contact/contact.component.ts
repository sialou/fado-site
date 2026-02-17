import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactPageComponent {

contactData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

sendContactEmail(form: any) {

  if (!form.valid) {
    alert("Veuillez remplir correctement tous les champs.");
    return;
  }

  const subject = `Contact - ${this.contactData.subject}`;

  const body = `
Nom : ${this.contactData.name}
Email : ${this.contactData.email}

Message :
${this.contactData.message}
  `;

  window.location.href =
    `mailto:contact@fondation-fado.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


}
