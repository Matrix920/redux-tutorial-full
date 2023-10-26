import { Component, OnInit } from '@angular/core';
import {Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { getChannelName } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  channelName: string | undefined;
  channel$: Observable<CounterState> = new Observable;

  constructor(private store: Store<{counter: CounterState}>) {

  }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(data => {
      this.channelName = data
    })
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }
}