import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Tool {
  name: string;
  icon: string;
}

interface Project {
  number: string;
  name: string;
  descriptionKey: string;
  tools: Tool[];
  short: string;
  image: string;
  link: string;
  git: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  hoveredProject: Project | null = null;
  hoveredIndex: number = -1;
  selectedProject: Project | null = null;

  constructor(public translate: TranslateService) {}

  openOverlay(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  showNextProject(event: Event): void {
    event.stopPropagation();

    if (!this.selectedProject) return;

    const currentIndex = this.projects.findIndex(
      (project) => project.name === this.selectedProject!.name,
    );

    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  projects: Project[] = [
    {
      number: '01',
      name: 'JOIN',
      descriptionKey: 'PROJECTS.JOIN_DESC',
      tools: [
        {
          name: 'HTML',
          icon: '../../assets/img/projects-icons/html-icon-green.svg',
        },
        {
          name: 'CSS',
          icon: '../../assets/img/projects-icons/css-icon-green.svg',
        },
        {
          name: 'JavaScript',
          icon: '../../assets/img/projects-icons/javascript-icon-green.svg',
        },
        {
          name: 'Firebase',
          icon: '../../assets/img/projects-icons/firebase-icon-green.svg',
        },
      ],
      short: 'JS',
      image: '../../assets/img/projects-icons/join-image.png',
      link: '',
      git: 'https://github.com/Pe3et/Join',
    },
    {
      number: '02',
      name: 'El Pollo Loco',
      descriptionKey: 'PROJECTS.POLLO_DESC',
      tools: [
        {
          name: 'HTML',
          icon: '../../assets/img/projects-icons/html-icon-green.svg',
        },
        {
          name: 'CSS',
          icon: '../../assets/img/projects-icons/css-icon-green.svg',
        },
        {
          name: 'JavaScript',
          icon: '../../assets/img/projects-icons/javascript-icon-green.svg',
        },
      ],
      short: 'JS',
      image: '../../assets/img/projects-icons/el-pollo-loco-image.png',
      link: '',
      git: 'https://github.com/SebastianBoehme/Pollo-Loco',
    },
  ];
}
