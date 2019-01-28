import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import {HeaderComponent} from './Header/header.component';
import { IssuesComponent } from './issues/issues.component';
import { AddEmployeeFormComponent } from './employees/addemployee-form.component';
import { EditIssueFormComponent } from './issues/editissue-form.component';
import { EmployeeFilterPipe } from './employees/employees-filter.pipe';
import { IssuesService } from './issues/issues.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, routing ],
  declarations: [ AppComponent, HeaderComponent, IssuesComponent, AddEmployeeFormComponent, EditIssueFormComponent, EmployeeFilterPipe ],
  providers: [ IssuesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
