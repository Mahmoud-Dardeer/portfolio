import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages',
      icon: 'code',
      skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'SCSS', 'XAML']
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'layers',
      skills: ['.NET (5, 6, 7, 8)', '.NET Core', 'MVC', 'EF Core', 'Angular (5-18)', 'Angular Material', 'WPF', 'SignalR', 'gRPC', 'JWT', 'ASP.NET Identity', 'Identity Server', 'AutoMapper', 'jQuery', 'Autofac', 'Fluent Validation', 'NUnit', 'Moq', 'RabbitMQ', 'EPPlus', 'GemBox', 'Kendo UI', 'Bootstrap', 'Firebase', 'AutoWrapper', 'NGRX']
    },
    {
      title: 'Tools & Platforms',
      icon: 'tool',
      skills: ['Visual Studio (2017-2022)', 'SQL Server', 'MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Hangfire', 'TFS', 'Git', 'Resharper', 'IIS', 'Postman', 'Swagger', 'Telerik Reporting', 'JMeter', 'Redgate', 'Android Studio']
    },
    {
      title: 'Concepts',
      icon: 'brain',
      skills: ['OOP', 'Clean Architecture', 'DDD', 'SOLID Principles', 'MVVM', 'Microservices', 'Repository & Unit of Work', 'Caching', 'Agile', 'Scrum', 'Prompt Engineering']
    },
    {
      title: 'Testing',
      icon: 'check',
      skills: ['Unit Testing', 'Integration Testing']
    }
  ];
}
