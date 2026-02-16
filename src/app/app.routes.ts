import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImpactPageComponent } from './pages/impact/impact.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page.component';
import { TestimonialsPageComponent } from './pages/testimonials/testimonials.component';
import { NewsPageComponent } from './pages/news/news.component';
import { PartnersPageComponent } from './pages/partners/partners.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { DonatePageComponent } from './pages/donate/donate.component';
import { AboutPageComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'FADO — Fondation d\'Aide et Développement' },
  { path: 'impact', component: ImpactPageComponent, title: 'Notre impact — FADO' },
  { path: 'projets', component: ProjectsPageComponent, title: 'Projets — FADO' },
  { path: 'projets/:slug', component: ProjectDetailPageComponent, title: 'Projet — FADO' },
  { path: 'temoignages', component: TestimonialsPageComponent, title: 'Témoignages — FADO' },
  { path: 'actualites', component: NewsPageComponent, title: 'Actualités — FADO' },
  { path: 'partenaires', component: PartnersPageComponent, title: 'Partenaires — FADO' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact — FADO' },
  { path: 'soutenir', component: DonatePageComponent, title: 'Soutenir — FADO' },
  { path: 'a-propos', component: AboutPageComponent, title: 'À propos — FADO' },
  { path: '**', redirectTo: '' }
];
