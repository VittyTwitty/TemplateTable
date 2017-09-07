import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOrCardComponent } from './list-or-card/list-or-card.component';
import { ListItemDirective } from './directives/card-list.directive';
import { CardItemDirective } from './directives/card-item.directive';
import { VtTableComponent } from './vt-table/vt-table.component';
import { TableDirective } from './directives/table.directive';
import { ChangeClassDirective } from './directives/change-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOrCardComponent,
    CardItemDirective,
    ListItemDirective,
    VtTableComponent,
    TableDirective,
    ChangeClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
