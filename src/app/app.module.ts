import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterContainerComponent } from './containers/counter-container/counter-container.component';
import { AppStateModule } from '@state/state.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
