import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../core/data.service';
import { ProjectCardComponent } from '../shared/project-card.component';
@Component({standalone:true,selector:'app-projects',imports:[CommonModule,ProjectCardComponent],template:`<section class="wrap"><h1>Projets</h1><div class="grid"><app-project-card *ngFor="let p of data.projects" [slug]="p.slug" [title]="p.title" [cover]="p.cover" [objective]="p.objective"></app-project-card></div></section>`,styles:[`.wrap{padding:2rem 1rem}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}@media (max-width:900px){.grid{grid-template-columns:1fr}}`]})
export class ProjectsPageComponent{ constructor(public data: DataService){} }
