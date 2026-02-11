import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  contact = {
    email: 'saadabid15@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saadabid',
    phone: '+966 53 158 4947'
  };

  get emailHref(): string {
    return `mailto:${this.contact.email}`;
  }

  get phoneHref(): string {
    return `tel:${this.contact.phone}`;
  }
}
