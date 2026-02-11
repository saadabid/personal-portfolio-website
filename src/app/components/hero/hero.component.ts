import { Component } from '@angular/core';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GetInTouchComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  name = 'Muhammad Saad Abid';
  title = 'Senior Software Engineer | Frontend & UX Engineering';
  experience = '7+ years of experience';
  description = 'Building scalable Angular applications and enterprise design systems for government and fintech platforms in Saudi Arabia. Specialized in usability optimization, performance enhancement, and scalable UI architecture.';

  profileImagePath = 'profile_img.svg';

}
