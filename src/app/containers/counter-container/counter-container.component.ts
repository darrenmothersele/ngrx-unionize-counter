import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '@state/reducers';
import { getCounterValue } from '@state/counter/selectors';
import { CounterActions } from '@state/counter/actions';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterContainerComponent implements OnInit {

  value$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.value$ = this.store.select(getCounterValue);
  }

  onIncreaseValue(value) {
    this.store.dispatch(CounterActions.increaseValue(value));
  }

  onDecreaseValue(value) {
    this.store.dispatch(CounterActions.decreaseValue(value));
  }
}
