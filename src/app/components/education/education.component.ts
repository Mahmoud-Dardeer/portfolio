import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  professionalDevelopment = [
    'Dale Carnegie Seminar: Effective Communications & Human Relations',
    'BBSA & Graduate Resource Program - Future Generation Foundation (FGF)',
    'Human Resources Track - FGF'
  ];
}
