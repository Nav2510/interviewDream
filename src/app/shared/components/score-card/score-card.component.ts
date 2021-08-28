import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreCardComponent {
  @Input() score: Array<{ category: string; score: number }>;
}
