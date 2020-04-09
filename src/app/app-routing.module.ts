import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CoursePageComponent} from './components/course-page/course-page.component';


const appRoutes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'course/:id', component: CoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
