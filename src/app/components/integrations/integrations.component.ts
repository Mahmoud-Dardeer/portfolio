import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Integration {
  name: string;
  description: string;
  usedIn: string[];
  category: string;
}

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {
  integrations: Integration[] = [
    {
      name: 'ZATCA SDK',
      description: 'Integration with Zakat, Tax and Customs Authority for Phase 2 E-Invoicing including XML generation, QR codes, digital signing, clearance (B2B) and reporting (B2C).',
      usedIn: ['ZUInvoice System', 'POS'],
      category: 'Government & Compliance'
    },
    {
      name: 'SAP ERP',
      description: 'Integration for retrieving and searching Standard invoices, syncing invoice data between SAP ERP and ZUInvoice for seamless clearance and reporting.',
      usedIn: ['ZUInvoice System'],
      category: 'Enterprise Systems'
    },
    {
      name: 'Nafath',
      description: 'Saudi Arabia\'s national digital identity system integration for candidate identity verification and auto-fill of National ID during job applications.',
      usedIn: ['Career System'],
      category: 'Government & Compliance'
    },
    {
      name: 'Azure AI Foundry',
      description: 'AI-powered chat system with custom agent creation supporting configurable instructions, temperature, knowledge sources, and intelligent conversational flows.',
      usedIn: ['DGPT'],
      category: 'AI & Cloud'
    },
    {
      name: 'OpenAI API',
      description: 'Integration with OpenAI models for enabling domain-specific AI queries, intelligent responses, and custom agent capabilities.',
      usedIn: ['DGPT'],
      category: 'AI & Cloud'
    },
    {
      name: 'Google Maps API',
      description: 'Real-time location tracking, route visualization, shortest path algorithm implementation, and accurate ETA calculation for delivery optimization.',
      usedIn: ['A2B'],
      category: 'Maps & Location'
    },
    {
      name: 'Firebase',
      description: 'Cloud messaging and real-time notifications for mobile push notifications, parent call-outs, order tracking updates, and delivery status sync.',
      usedIn: ['Sarfa', 'Elagk', 'Mira', 'A2B'],
      category: 'Cloud & Messaging'
    },
    {
      name: 'SignalR',
      description: 'Real-time bi-directional communication for pushing e-commerce orders to POS terminals instantly, patient vital sign alerts, and live school display notifications.',
      usedIn: ['POS', 'True Blue', 'Sarfa'],
      category: 'Real-Time Communication'
    },
    {
      name: 'gRPC',
      description: 'High-performance RPC framework for efficient communication between POS machines, backend services, and WPF desktop clients.',
      usedIn: ['POS'],
      category: 'Communication Protocols'
    },
    {
      name: 'GemBox',
      description: 'PDF generation library for creating invoice documents embedded with cleared XML files, digital signatures, and QR codes.',
      usedIn: ['ZUInvoice System'],
      category: 'Document Generation'
    },
    {
      name: 'Medical Devices',
      description: 'Integration with blood pressure monitors, glucometers, and heart rate sensors for automatic retrieval and recording of patient vital sign readings.',
      usedIn: ['pVerify'],
      category: 'IoT & Hardware'
    },
    {
      name: 'Google reCAPTCHA v3',
      description: 'Bot protection and security verification for public-facing forms and user registration.',
      usedIn: ['Keswa System', 'Eradah System'],
      category: 'Security'
    }
  ];

  categories: string[] = [];

  constructor() {
    this.categories = [...new Set(this.integrations.map(i => i.category))];
  }

  getByCategory(category: string): Integration[] {
    return this.integrations.filter(i => i.category === category);
  }
}
