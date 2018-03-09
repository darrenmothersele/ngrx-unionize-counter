import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() value: number;
  @Output() increase: EventEmitter<number>;
  @Output() decrease: EventEmitter<number>;

  constructor() {
    this.increase = new EventEmitter<number>();
    this.decrease = new EventEmitter<number>();
  }

  onInc() {
    this.increase.emit(1);
  }

  onDec() {
    this.decrease.emit(1);
  }
}
