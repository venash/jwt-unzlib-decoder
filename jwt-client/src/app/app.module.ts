import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FilterComponent } from './components/filter/filter.component';
import { SubmitComponent } from './components/submit/submit.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
  declarations: [
    /*
    TODO:
    v komponentech si zadefinuj index.ts do nej vytvor
    export const components: Type<any> = [
    ]

    sem pak zadefinuj import * as fromComponents from './components'
    a pak tu vloz ...fromComponents.components

     */
    AppComponent,
      HeaderComponent,
      FooterComponent,
      ContentComponent,
      FilterComponent,
      SubmitComponent,
      TextAreaComponent
   ],
  imports: [
    BrowserModule,
    /*
    TODO:
    vytvor CoreModule, ktery bude obsahovat tyto dva nize uvedene
     */
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
