import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Cars } from './mock/mock-cars';
import { CarService } from './shared/car/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { GiphyService } from './shared/giphy/giphy.service';
import { MessageService } from './shared/messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { CarEditComponent } from './car-edit/car-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CarListComponent,
    MessagesComponent,
    CarEditComponent,
  ],
  providers: [
    Cars,
    CarService,
    GiphyService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
