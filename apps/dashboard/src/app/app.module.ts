import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@workshop/material';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@workshop/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
