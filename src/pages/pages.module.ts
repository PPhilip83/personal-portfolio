import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    LandingPageComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ]
})
export class PagesModule {}
