import { Component } from '@angular/core';
import { HeroComponent } from '../shared/hero.component';
import { StatGridComponent } from '../shared/stat-grid.component';
import { ProjectCardComponent } from '../shared/project-card.component';
import { TestimonialComponent } from '../shared/testimonial.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';

@Component({standalone:true,selector:'app-home',imports:[HeroComponent,StatGridComponent,ProjectCardComponent,TestimonialComponent,RouterLink,NgFor],template:`<app-hero [title]="data.site.hero.title" [subtitle]="data.site.hero.subtitle" [ctas]="data.site.hero.ctas" [image]="data.site.hero.image"></app-hero><section class="wrap"><h2>Notre impact</h2><app-stat-grid [stats]="data.stats"></app-stat-grid></section><section class="wrap"><h2>Projets en vedette</h2><div class="grid"><app-project-card *ngFor="let p of data.projects" [slug]="p.slug" [title]="p.title" [cover]="p.cover" [objective]="p.objective"></app-project-card></div><p><a routerLink="/projets">Voir tous les projets →</a></p></section><section class="wrap"><h2>Témoignages</h2><div class="grid tgrid"><app-testimonial *ngFor="let t of data.testimonials" [text]="t.text" [name]="t.name" [role]="t.role"></app-testimonial></div></section>`,styles:[`.wrap{padding:2rem 1rem}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}@media (max-width:900px){.grid{grid-template-columns:1fr}}`]} )
export class HomePageComponent{ constructor(public data: DataService){} }
