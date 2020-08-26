import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FilterComponent } from './filter/filter.component';
import { SubmitComponent } from './submit/submit.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [
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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
