import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursePageComponent } from './course-page/course-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CatalogComponent,
    CourseItemComponent,
    FooterComponent,
    CoursePageComponent
  ],
  exports: [
    HeaderComponent,
    CatalogComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class ComponentsModule { }
