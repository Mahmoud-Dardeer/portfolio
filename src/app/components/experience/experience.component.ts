import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  techTags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'DevopSolution',
      role: 'Senior Full Stack Developer',
      period: 'Sep 2024 - Present',
      points: [
        'Leading development of Tasheer pilgrimage platforms serving 10,000+ pilgrim records with scalable booking systems.',
        'Improved system response time by 35% through SQL Server query optimization after MySQL migration.',
        'Proposed and implemented Clean Architecture in large-scale projects to improve maintainability.'
      ],
      techTags: ['Angular', '.NET Core', 'SQL Server', 'EF Core', 'Azure AI', 'Identity Server']
    },
    {
      company: 'Digital Business Systems (DBS)',
      role: 'Senior Full Stack Developer',
      period: 'Sep 2022 - Sep 2024',
      points: [
        'Built ZATCA-compliant e-Invoicing system (Phase 2) supporting B2B clearance and B2C reporting flows.',
        'Reduced invoice rejections through robust SDK-based XML validation and automated digital signing.',
        'Contributed to POS retail system and mentored junior developers in gRPC and WPF.'
      ],
      techTags: ['Angular', '.NET Core', 'ZATCA SDK', 'gRPC', 'WPF', 'SAP', 'GemBox']
    },
    {
      company: 'Centro CDX',
      role: 'Senior Full Stack Developer',
      period: 'Jan 2022 - Sep 2022',
      points: [
        'Developed a patient monitoring system integrated with medical devices for real-time vital signs tracking.',
        'Implemented real-time alerts to nursing staff when patient readings exceeded safe thresholds.',
        'Built dashboards for medical staff to track patient health trends proactively.'
      ],
      techTags: ['Angular', '.NET Core', 'SQL Server', 'SignalR']
    },
    {
      company: 'Modawa Medical Co.',
      role: 'Full Stack Developer',
      period: 'Nov 2019 - Dec 2021',
      points: [
        'Delivered hundreds of validated APIs and responsive front-end interfaces across multiple products.',
        'Designed A2B route optimization using shortest path algorithm with Google Maps integration.',
        'Collaborated with mobile teams on Elagk, Mira, and A2B platforms.'
      ],
      techTags: ['Angular', '.NET Core', 'Google Maps API', 'SQL Server']
    },
    {
      company: 'Dental Smile Co.',
      role: 'Junior Full Stack Developer',
      period: 'Apr 2018 - Oct 2019',
      points: [
        'Developed and maintained ERP modules for dental clinic operations.',
        'Worked with Visual Studio, SQL Server, and Telerik Reporting.'
      ],
      techTags: ['.NET', 'SQL Server', 'Telerik']
    },
    {
      company: '3annak App',
      role: 'Freelance Software Developer',
      period: 'Oct 2017 - Mar 2018',
      points: [
        'Built Android and web-based systems for online course registration and order tracking.'
      ],
      techTags: ['Android', '.NET', 'SQL Server']
    }
  ];
}
