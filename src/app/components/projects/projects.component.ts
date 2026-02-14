import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Project {
  title: string;
  subtitle?: string;
  company: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metric?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Keswa System',
      subtitle: 'Charitable Organization Platform',
      company: 'DevopSolution',
      description: 'Comprehensive charitable platform connecting beneficiaries, volunteers, employers, and community supporters. The system provides structured services for talent development, clothing distribution, volunteer coordination, employment support, and community engagement.',
      highlights: [
        'Beneficiary management with family member registration, financial profiling, income tracking, and clothing size allocation',
        'Volunteer coordination with availability scheduling, event assignment, and attendance tracking',
        'Events & Conferences module with multi-day scheduling, speaker management, scientific programs, and attendee feedback',
        'Clothing & Inventory distribution with gender-based sizing, bazaar management, and stock monitoring',
        'Powerful comparison dashboard analyzing beneficiary needs per gender, clothing category, and size against inventory stock with automatic shortage and excess detection',
        'Multi-language CMS (Arabic, English, French) for news, media galleries, documents, FAQs, and mailing lists',
        'Full audit logging, error monitoring, department-level reports, and role-based access control',
        'Migrated massive dataset from MySQL to SQL Server with full database normalization and redesigned architecture'
      ],
      techStack: ['ASP.NET Core 8 MVC', 'EF Core 8', 'SQL Server', 'ASP.NET Identity', 'jQuery', 'Bootstrap (AdminLTE)', 'AutoMapper'],
      metric: 'Massive data migration MySQL to SQL Server'
    },
    {
      title: 'Eradah System',
      subtitle: 'Charitable Organization Platform',
      company: 'DevopSolution',
      description: 'Comprehensive charitable platform designed to support people with disabilities and talented individuals with special abilities, empowering beneficiaries socially and professionally through talent development, rehabilitation, and employment opportunities.',
      highlights: [
        'Talent Adoption Program with beneficiary registration, skills assessment, personalized development plans, and mentorship',
        'Job Placement & Employment Assistance with professional profiles, candidate-job matching, and company coordination for inclusive hiring',
        'Training & Development module offering technical and soft skills training, career counseling, and professional readiness workshops',
        'Talent and skills management module for identifying, evaluating, and sponsoring talented individuals',
        'Job posting and matching functionality connecting beneficiaries with suitable employers',
        'Role-based access control for Beneficiaries, Admins, and Employers',
        'Reporting and analytics dashboard tracking employment status and program impact',
        'Notification system for updates and opportunities with document and profile management'
      ],
      techStack: ['ASP.NET Core 8 MVC', 'EF Core 8', 'SQL Server', 'ASP.NET Identity', 'jQuery', 'Bootstrap (AdminLTE)', 'AutoMapper'],
      metric: 'Automated skills-to-job matching across 8 modules'
    },
    {
      title: 'Career System',
      subtitle: 'Seasonal Workforce Management',
      company: 'DevopSolution',
      description: 'Seasonal Employment & Workforce Management System, managing the full hiring lifecycle of temporary Hajj season employees across Hospitality Center and Company Administration streams.',
      highlights: [
        'Multi-stage recruitment pipeline: job discovery, application, nomination, data completion, multi-level approval, contract signing, and post-employment evaluation',
        'Nafath (Saudi national digital identity) integration for candidate identity verification and auto-fill',
        'OTP verification via email and SMS for application submission and contract signing (non-repudiation)',
        'Comprehensive application form with age eligibility enforcement, duplicate prevention, and whitelist override for pre-approved candidates',
        'Sequential 4-level approval chain: HR → Sector Head → Head of Services → CEO with rejection notes at any stage',
        'Digital contract issuance with Hijri date support, 24 employment clauses, and salary calculation (daily rate × duration or total bonus)',
        'Post-employment evaluation with dynamic competency ratings (1-5 stars) based on job role (Manager vs. Non-Manager)',
        'Employee ID card printing and clearance workflow management'
      ],
      techStack: ['ASP.NET Core 8 MVC', 'EF Core 8', 'SQL Server', 'ASP.NET Identity', 'Nafath API', 'jQuery', 'Bootstrap (AdminLTE)', 'AutoMapper'],
      metric: 'Nafath integration'
    },
    {
      title: 'ZUInvoice System',
      subtitle: 'ZATCA Phase 2 (Wave 1)',
      company: 'Digital Business Systems (DBS)',
      description: 'ZATCA-integrated e-Invoicing system handling Phase 2 E-Invoices for clearing (B2B) and reporting (B2C) with full compliance.',
      highlights: [
        'SAP integration for retrieving and searching Standard invoices, syncing invoice data between SAP ERP and ZUInvoice for seamless clearance and reporting',
        'Generate invoices XMLs with ZATCA standards',
        'QR code, hash generation & XML validation via ZATCA SDK',
        'Invoice PDF generation embedded with cleared XML using GemBox',
        'Automated digital signing with KSA-approved certificates',
        'PDF archiving system',
        'Database migration from SQL Server to PostgreSQL for improved scalability and cost optimization'
      ],
      techStack: ['Angular', '.NET Core', 'ZATCA SDK', 'SAP', 'GemBox', 'SQL Server', 'PostgreSQL'],
      metric: 'ZATCA integration, SAP integration'
    },
    {
      title: 'Mateen ElManasik',
      subtitle: 'Seasonal Jobs',
      company: 'DevopSolution',
      description: 'Client and admin portal for seasonal job applications related to the Haj season with full workflow management.',
      highlights: [
        'Applicant job matching and qualification checks',
        'Admin workflows for contract issuance and approval',
        'Payroll generation and clearance handling',
        'Self and manager applicant evaluations'
      ],
      techStack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Angular', 'Identity Server'],
      metric: 'Automated payroll generation & clearance'
    },
    {
      title: 'DGPT',
      subtitle: 'Azure AI Foundry Chat & Custom Agents',
      company: 'DevopSolution',
      description: 'AI-powered chat system leveraging Azure AI Foundry with custom agent creation supporting configurable instructions, temperature, and knowledge sources.',
      highlights: [
        'Custom AI agents with configurable parameters',
        'Intelligent conversational flows for domain-specific queries',
        'Secure backend for agent deployment and monitoring'
      ],
      techStack: ['Azure AI Foundry', 'OpenAI API', '.NET Core', 'Angular'],
      metric: 'Azure AI Foundry + OpenAI API integration'
    },
    {
      title: 'Sarfa',
      subtitle: 'Student Attendance System',
      company: 'DevopSolution',
      description: 'Real-time attendance and leave management system with mobile notifications for parent communication and student tracking.',
      highlights: [
        'Real-time attendance tracking',
        'Mobile notifications for parent call-outs',
        'Dynamic approvals and secure communication',
        'Real-time school display page showing student photo and name when a parent requests pickup, notifying staff instantly',
        'Bulk Excel upload processing 30,000 student and parent records in under 1 minute with high system performance'
      ],
      techStack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Angular', 'Firebase'],
      metric: '30,000 record Excel upload in under 1 min'
    },
    {
      title: 'Nigerian Umrah & Haj Platform (NUHP)',
      company: 'DevopSolution',
      description: 'Dual-portal system (client website + admin panel) for managing Umrah and Haj packages including flights and hotels for Makkah & Madinah.',
      highlights: [
        'Package display, booking, and management system',
        'Dynamic dashboards for package publication and booking approvals',
        'Clean Architecture implementation for scalability'
      ],
      techStack: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Angular'],
      metric: 'Built with Clean Architecture for scalability'
    },
    {
      title: 'POS',
      subtitle: 'Retail System',
      company: 'Digital Business Systems (DBS)',
      description: 'Point of Sale retail system managing stores and sales through branches and POS machines, with real-time e-commerce sync and ZATCA-compliant invoicing.',
      highlights: [
        'Branch and POS machine management for multi-store operations',
        'Real-time e-commerce integration using SignalR to push online orders instantly to POS terminals for immediate processing',
        'Synchronized inventory updates between POS and e-commerce platform to prevent overselling',
        'Invoice integration with ZUInvoice system to automatically generate ZATCA-compliant e-Invoices for every POS transaction',
        'Seamless clearance (B2B) and reporting (B2C) of POS-generated invoices through the ZUInvoice pipeline',
        'Digital receipt issuance with QR codes linked to cleared invoice data'
      ],
      techStack: ['.NET Core', 'gRPC', 'WPF', 'SignalR', 'SQL Server', 'Angular'],
      metric: 'Delivered to 8+ clients'
    },
    {
      title: 'True Blue',
      subtitle: 'Patient Monitoring System',
      company: 'Centro CDX',
      description: 'Real-time patient monitoring system integrated with medical devices to automatically retrieve vital signs like blood pressure and heart rate.',
      highlights: [
        'Medical device integration for vital signs retrieval',
        'Real-time alerts when readings exceed safe thresholds',
        'Health trend dashboards for proactive medical response'
      ],
      techStack: ['Angular', '.NET Core', 'SQL Server', 'SignalR'],
      metric: 'Real-time medical device alerts via SignalR'
    },
    {
      title: 'pVerify',
      subtitle: 'Medical Device Integration System',
      company: 'Centro CDX',
      description: 'System for integrating with medical devices that read blood pressure, blood sugar, heart rate, and other vital signs, automatically recording readings into the patient management system.',
      highlights: [
        'Integration with blood pressure monitors, glucometers, and heart rate sensors',
        'Automatic retrieval and recording of patient vital sign readings',
        'Historical readings storage with trend analysis and charting',
        'Threshold-based alerts notifying nursing staff of critical readings',
        'Patient profile linking for continuous health monitoring across visits'
      ],
      techStack: ['Angular', '.NET Core', 'SQL Server', 'SignalR'],
      metric: 'Integrated 3+ medical device types'
    },
    {
      title: 'Elagk',
      subtitle: 'Online Pharmacy',
      company: 'Modawa Medical Co.',
      description: 'Online pharmacy platform enabling users to browse, search, and order medications and healthcare products with prescription management and home delivery.',
      highlights: [
        'Product catalog with categories, search, and filtering for medications',
        'Prescription upload and validation workflow',
        'Shopping cart, checkout, and multiple payment methods',
        'Order tracking with real-time delivery status updates',
        'Pharmacy inventory management and stock alerts'
      ],
      techStack: ['Angular', '.NET Core', 'SQL Server', 'Firebase'],
      metric: 'Prescription validation + Firebase notifications'
    },
    {
      title: 'Mira',
      subtitle: 'Online Supermarket',
      company: 'Modawa Medical Co.',
      description: 'On-demand supermarket delivery app similar to Talabat, allowing users to browse grocery products, place orders, and get fast home delivery.',
      highlights: [
        'Product browsing with categories, offers, and real-time availability',
        'Smart cart with quantity management and promo code support',
        'Real-time order tracking from preparation to doorstep delivery',
        'Delivery scheduling with time slot selection',
        'Rating and review system for products and delivery experience'
      ],
      techStack: ['Angular', '.NET Core', 'SQL Server', 'Firebase'],
      metric: 'Real-time order tracking via Firebase'
    },
    {
      title: 'A2B',
      subtitle: 'Delivery Platform',
      company: 'Modawa Medical Co.',
      description: 'Centralized delivery management platform serving as the logistics backbone for both Elagk pharmacy and Mira supermarket apps, with intelligent route optimization and real-time tracking.',
      highlights: [
        'Designed and implemented the A2B system\'s route optimization module using a shortest path algorithm to improve delivery efficiency',
        'Google Maps API for real-time location tracking, route visualization, and accurate ETA calculation',
        'Integrated with Elagk to handle pharmacy order dispatching, prescription delivery verification, and medication-specific handling requirements',
        'Integrated with Mira to manage grocery delivery logistics, time-slot scheduling, and perishable item priority routing',
        'Unified driver assignment and fleet management across both Elagk and Mira platforms',
        'Real-time delivery status sync between A2B, Elagk, and Mira for end-to-end order visibility'
      ],
      techStack: ['Angular', '.NET Core', 'Google Maps API', 'SQL Server', 'Firebase'],
      metric: 'Shortest path algorithm + Google Maps'
    },
    {
      title: 'Dental Clinic',
      subtitle: 'ERP System',
      company: 'Dental Smile Co.',
      description: 'Developed and maintained ERP modules for dental clinic operations, streamlining day-to-day workflows across appointments, patients, and billing.',
      highlights: [
        'Patient records management with medical history and treatment plans',
        'Appointment scheduling and calendar management for doctors and clinics',
        'Billing and invoicing module with insurance claim support',
        'Inventory tracking for dental supplies and materials',
        'Reporting dashboards with clinic performance metrics'
      ],
      techStack: ['.NET', 'SQL Server', 'Telerik Reporting'],
      metric: '5 integrated ERP modules + Telerik Reporting'
    },
    {
      title: '3annak',
      subtitle: 'Online Course Platform',
      company: 'Freelance',
      description: 'Built Android and web-based systems for online course registration and order tracking, enabling students to browse, enroll, and manage their learning journey.',
      highlights: [
        'Course catalog with categories, search, and detailed course pages',
        'Student registration and enrollment workflow',
        'Order tracking for course purchases and payment status',
        'Android mobile app for on-the-go course access',
        'Admin panel for managing courses, students, and orders'
      ],
      techStack: ['Android', '.NET', 'SQL Server'],
      metric: 'Shipped native Android app + web platform'
    }
  ];

  activeFilter = 'All';

  get companies(): string[] {
    const unique = [...new Set(this.projects.map(p => p.company))];
    return ['All', ...unique];
  }

  companyDuration: Record<string, string> = {
    'DevopSolution': 'Sep 2024 - Present',
    'Digital Business Systems (DBS)': 'Sep 2022 - Sep 2024',
    'Centro CDX': 'Jan 2022 - Sep 2022',
    'Modawa Medical Co.': 'Nov 2019 - Dec 2021',
    'Dental Smile Co.': 'Apr 2018 - Oct 2019',
    'Freelance': 'Oct 2017 - Mar 2018'
  };

  private companyOrder = [
    'DevopSolution',
    'Digital Business Systems (DBS)',
    'Centro CDX',
    'Modawa Medical Co.',
    'Dental Smile Co.',
    'Freelance'
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return [...this.projects].sort((a, b) => {
        return this.companyOrder.indexOf(a.company) - this.companyOrder.indexOf(b.company);
      });
    }
    return this.projects.filter(p => p.company === this.activeFilter);
  }

  setFilter(company: string) {
    this.activeFilter = company;
  }
}
