import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
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
