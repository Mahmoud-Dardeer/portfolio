import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
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
