import { Component } from '@angular/core'

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent {
  score: Array<{ label: string; value: number }> = [
    {
      label: 'Algorithms',
      value: 9.3,
    },
    {
      label: 'SCSS',
      value: 5.6,
    },
    {
      label: 'Node',
      value: 7.8,
    },
    {
      label: 'Java',
      value: 2.3,
    },
    {
      label: 'Javascript',
      value: 4.8,
    },
    {
      label: 'Database',
      value: 6.5,
    },
  ]
}
