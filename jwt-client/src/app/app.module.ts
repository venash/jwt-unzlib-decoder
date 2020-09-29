import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import * as componentList from './components';
import * as serviceList from './services';

@NgModule({
  declarations: [AppComponent, ...componentList.components],
  imports: [BrowserModule, CoreModule],
  providers: [...serviceList.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
