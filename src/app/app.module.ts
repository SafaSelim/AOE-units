import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterAgesComponent } from './components/filter-ages/filter-ages.component';
import { FilterCostsComponent } from './components/filter-costs/filter-costs.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterAgesComponent,
    FilterCostsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
