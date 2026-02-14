import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface ApproachItem {
  icon: string;
  title: string;
  description: string;
  practices: string[];
}

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.scss'
})
export class ApproachComponent {
  approaches: ApproachItem[] = [
    {
      icon: 'architecture',
      title: 'Clean Architecture',
      description: 'Building maintainable, testable systems with clear separation of concerns and dependency inversion.',
      practices: ['Domain-Driven Design', 'SOLID Principles', 'Repository & Unit of Work', 'Dependency Injection']
    },
    {
      icon: 'code-review',
      title: 'Code Quality',
      description: 'Writing clean, readable code with consistent standards, thorough reviews, and automated testing.',
      practices: ['Code Reviews', 'Unit & Integration Testing', 'Naming Conventions', 'Design Patterns']
    },
    {
      icon: 'performance',
      title: 'Performance First',
      description: 'Optimizing from database queries to API responses, ensuring systems scale under real-world load.',
      practices: ['Query Optimization', 'Caching Strategies', 'Load Testing (JMeter)', 'Database Indexing']
    },
    {
      icon: 'integration',
      title: 'System Integration',
      description: 'Connecting complex systems — from government APIs to IoT devices — with reliable, secure data flows.',
      practices: ['ZATCA & SAP Integration', 'Real-Time (SignalR)', 'REST & gRPC APIs', 'Third-Party SDKs']
    },
    {
      icon: 'mentoring',
      title: 'Mentoring & Leadership',
      description: 'Guiding junior developers, conducting knowledge sharing sessions, and elevating team capabilities.',
      practices: ['Code Review Mentoring', 'gRPC & WPF Training', 'Architecture Decisions', 'Technical Documentation']
    },
    {
      icon: 'agile',
      title: 'Agile Delivery',
      description: 'Iterative development with continuous feedback, ensuring on-time delivery with quality.',
      practices: ['Scrum Methodology', 'Sprint Planning', 'Stakeholder Communication']
    }
  ];
}
