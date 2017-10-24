import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    StockManageComponent,
    StarRatingComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
