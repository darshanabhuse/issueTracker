import { Routes, RouterModule } from '@angular/router';

import {IssuesComponent} from './issues/issues.component';
import { EmployeeComponent } from './employees/employee.component';
import { AddEmployeeFormComponent } from './employees/addemployee-form.component';
import { EditIssueFormComponent } from './issues/editissue-form.component';

const appRoutes: Routes = [
  { path: '', component: IssuesComponent },
  { path: 'editIssue/:id', component: EditIssueFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
