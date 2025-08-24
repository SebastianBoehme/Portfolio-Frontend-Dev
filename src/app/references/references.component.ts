import { Component } from '@angular/core';

interface Reference {
  author: string;
  reference: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references: Reference[] = [
    {
      author: 'P. Wolf – Team Partner',
      reference: 'Während unserer Gruppenarbeit hat Sebastian als freundliches, zwischenmenschliches Bindeglied, mit Leidenschaft für die Umsetzung von schickem Design, zum Erfolg des Projekts beigetragen.'
    },
    {
      author: 'S. Wehrhahn – Team Partner',
      reference: `Sebastian ist von Anfang an durch seine offene und freundliche Art aufgefallen. Er scheut sich nicht, auf andere zuzugehen, und schafft es sofort, eine angenehme Atmosphäre zu erzeugen, sodass man das Gefühl hat, ihn schon lange zu kennen.

Während unseres gemeinsamen Projekts hat er gezeigt, was für ein herausragender Teamplayer er ist. Sebastian war immer hilfsbereit, zuverlässig und bereit, jede Lücke im Team zu füllen. Besonders beeindruckend fand ich seine Fähigkeit, bei Schwierigkeiten ohne Zögern um Unterstützung zu bitten.

Es war eine Freude, mit Sebastian zusammenzuarbeiten, und ich bin sicher, dass er auch in Zukunft eine Bereicherung für jedes Team sein wird.`
    }
  ];

}
