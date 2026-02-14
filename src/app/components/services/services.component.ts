import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  backedBy: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'architecture',
      title: 'System Design & Architecture',
      description: 'Structuring large-scale applications from scratch using Clean Architecture, DDD, and SOLID principles for long-term maintainability.',
      backedBy: ['Keswa System', 'Eradah System', 'NUHP']
    },
    {
      icon: 'migration',
      title: 'Legacy Migration',
      description: 'Database redesign, normalization, and cross-platform migration with zero data loss and improved performance.',
      backedBy: ['Keswa (MySQL → SQL Server)', 'ZUInvoice (SQL Server → PostgreSQL)']
    },
    {
      icon: 'compliance',
      title: 'Government & Compliance Integration',
      description: 'Navigating complex regulatory requirements including e-Invoicing standards, digital identity systems, and compliance reporting.',
      backedBy: ['ZUInvoice (ZATCA Phase 2)', 'Career System (Nafath)']
    },
    {
      icon: 'realtime',
      title: 'Real-Time Systems',
      description: 'Building live data pipelines for instant notifications, real-time dashboards, and bi-directional communication.',
      backedBy: ['POS (SignalR)', 'True Blue (Patient Alerts)', 'Sarfa (School Display)']
    },
    {
      icon: 'performance',
      title: 'Performance Optimization',
      description: 'Query tuning, caching strategies, and bulk processing optimization delivering measurable speed improvements.',
      backedBy: ['35% Response Time Improvement', 'Sarfa (30K Records in <1 Min)']
    },
    {
      icon: 'ai',
      title: 'AI-Powered Solutions',
      description: 'Building custom AI agents and intelligent conversational systems using Azure AI Foundry and OpenAI models.',
      backedBy: ['DGPT (Azure AI Foundry)', 'OpenAI API']
    },
    {
      icon: 'api',
      title: 'API Design & Integration',
      description: 'Connecting complex third-party systems with reliable, secure APIs using REST, gRPC, and real-time protocols.',
      backedBy: ['SAP ERP', 'Google Maps API', 'Firebase', 'gRPC']
    },
    {
      icon: 'mentoring',
      title: 'Team Mentoring',
      description: 'Elevating team capabilities through code reviews, knowledge sharing, architecture guidance, and hands-on training.',
      backedBy: ['gRPC & WPF Training (DBS)', 'Architecture Decisions']
    }
  ];
}
