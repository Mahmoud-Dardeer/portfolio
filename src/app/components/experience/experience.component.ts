import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  techTags: string[];
  award?: { label: string; image: string; issuer: string; date: string };
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  selectedAward: Experience['award'] | null = null;

  openAward(award: Experience['award']): void {
    this.selectedAward = award!;
  }

  closeAward(): void {
    this.selectedAward = null;
  }

  experiences: Experience[] = [
    {
      company: 'DevopSolution',
      role: 'Senior Full Stack Developer',
      period: 'Sep 2024 - Present',
      points: [
        'Led development of Tasheer pilgrimage platform and NUHP booking system, building scalable service coordination for high-volume seasonal Hajj and Umrah operations.',
        'Boosted system response time by 35% on Keswa by migrating from MySQL to SQL Server and rewriting critical queries with optimized execution plans.',
        'Built Keswa and Eradah charitable platforms from scratch, including beneficiary management, volunteer coordination, and inventory distribution modules.',
        'Drove adoption of Clean Architecture across NUHP and Keswa, improving codebase maintainability and reducing onboarding time for new developers.',
        'Developed DGPT, an AI-powered chat system with custom agents using Azure AI Foundry, automating document verification and domain-specific queries.',
        'Built Sarfa real-time attendance system with Firebase push notifications and Career System for seasonal workforce hiring with Nafath identity integration.'
      ],
      techTags: ['ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'Azure AI Foundry', 'Identity Server', 'Firebase']
    },
    {
      company: 'Digital Business Systems (DBS)',
      role: 'Senior Full Stack Developer',
      period: 'Sep 2022 - Sep 2024',
      points: [
        'Architected and delivered a ZATCA-compliant e-Invoicing system (Phase 2) with full B2B clearance and B2C reporting flows handling high-volume invoice processing.',
        'Drastically reduced invoice rejection rates by implementing robust SDK-based XML validation and automated digital signing pipelines.',
        'Built POS retail modules with real-time inventory synchronization, noticeably improving checkout speed and operational efficiency.',
        'Mentored junior developers in gRPC and WPF through structured code reviews and pair programming, significantly accelerating their productivity ramp-up.'
      ],
      techTags: ['Angular', '.NET Core', 'ZATCA SDK', 'gRPC', 'WPF', 'SAP', 'GemBox', 'SignalR', 'SQL Server', 'PostgreSQL'],
      award: { label: 'Certificate of Appreciation 2023', image: 'images/DBSCertificate.png', issuer: 'Digital Business Systems', date: 'March 2024' }
    },
    {
      company: 'Centro CDX',
      role: 'Senior Full Stack Developer',
      period: 'Jan 2022 - Sep 2022',
      points: [
        'Engineered a real-time patient monitoring system integrated with medical devices, enabling nursing staff to respond to critical events within seconds.',
        'Designed a SignalR-powered alert engine that instantly notifies staff when patient readings breach safe thresholds, drastically cutting emergency response time.',
        'Built interactive dashboards visualizing patient health trends, helping medical staff identify deteriorating conditions far earlier than manual chart reviews.'
      ],
      techTags: ['Angular', '.NET Core', 'SQL Server', 'SignalR']
    },
    {
      company: 'Modawa Medical Co.',
      role: 'Full Stack Developer',
      period: 'Nov 2019 - Dec 2021',
      points: [
        'Delivered a large suite of RESTful APIs and responsive front-end interfaces powering three healthcare platforms: Elagk, Mira, and A2B.',
        'Designed the A2B route optimization engine using Dijkstra\'s shortest path algorithm with Google Maps integration, meaningfully reducing average delivery times.',
        'Served as the bridge between backend and mobile teams, defining API contracts and resolving integration issues that shortened release cycles significantly.'
      ],
      techTags: ['Angular', '.NET Core', 'SQL Server', 'Google Maps API', 'Firebase']
    },
    {
      company: 'Dental Smile Co.',
      role: 'Junior Full Stack Developer',
      period: 'Apr 2018 - Oct 2019',
      points: [
        'Built and maintained core ERP modules — appointments, billing, inventory, patient records, and reporting — streamlining daily operations across multiple dental clinics.',
        'Developed automated reporting dashboards using Telerik, replacing manual Excel workflows and freeing up significant staff hours weekly.',
        'Reduced data entry errors by implementing input validation and business rule enforcement across all patient-facing forms.'
      ],
      techTags: ['.NET', 'SQL Server', 'Telerik Reporting']
    },
    {
      company: '3annak App',
      role: 'Freelance Software Developer',
      period: 'Oct 2017 - Mar 2018',
      points: [
        'Built a full-stack course registration platform from scratch with Android and web clients, achieving rapid user adoption shortly after launch.',
        'Designed and implemented an order tracking system with real-time status updates, substantially reducing customer support inquiries.'
      ],
      techTags: ['Android', '.NET', 'SQL Server']
    }
  ];
}
