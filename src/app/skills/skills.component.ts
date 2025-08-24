import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills: { icon: string; name: string }[] = [
    {
      icon: '../../assets/img/skills-icons/html-icon.svg',
      name: 'HTML'
    },
    {
      icon: '../../assets/img/skills-icons/css-icon.svg',
      name: 'CSS3'
    },
    {
      icon: '../../assets/img/skills-icons/js-icon.svg',
      name: 'JavaScript'
    },
    {
      icon: '../../assets/img/skills-icons/material-design-icon.svg',
      name: 'Material Design'
    },
    {
      icon: '../../assets/img/skills-icons/ts-icon.svg',
      name: 'TypeScript'
    },
    {
      icon: '../../assets/img/skills-icons/angular-icon.svg',
      name: 'Angular'
    },
    { icon: '../../assets/img/skills-icons/firebase-icon.svg',
      name: 'Firebase'
    },
    {
      icon: '../../assets/img/skills-icons/git-icon.svg',
      name: 'GIT'
    },
    {
      icon: '../../assets/img/skills-icons/rest-api-icon.svg',
      name: 'Rest API'
    },
    {
      icon: '../../assets/img/skills-icons/scrum-icon.svg',
      name: 'Scrum'
    },
    {
      icon: '../../assets/img/skills-icons/groth-mindset.svg',
      name: 'Growth Mindset'
    }
  ];

  

  showTooltip = false;

  onHover(index: number) {
    if (index === this.skills.length - 1) {
      this.showTooltip = true;
    }
  }

  onLeave() {
    this.showTooltip = false;
  }

}
