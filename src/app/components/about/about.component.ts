import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  competencies = [
    'Full Stack Development',
    'System Integration (ZATCA, SAP, E-Commerce)',
    'Azure AI Foundry',
    'Clean Architecture',
    'Microservices',
    'Real-Time Systems',
    'gRPC',
    'E-Invoicing & Payment Solutions',
    'Performance Optimization'
  ];
}
