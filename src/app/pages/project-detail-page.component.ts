import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../core/data.service';
import { Project } from '../models/project.model';
@Component({standalone:true,selector:'app-project-detail',imports:[ CommonModule,RouterLink],template:`<section class="wrap" *ngIf="proj"><a routerLink="/projets">← Retour</a><h1>{{proj.title}}</h1><img [src]="proj.cover" [alt]="proj.title" class="cover"><p><strong>Objectif:</strong> {{proj.objective}}</p><p><strong>Zone:</strong> {{proj.location}}</p><div *ngIf="proj.body">{{proj.body}}</div><h3>Résultats</h3><ul><li *ngFor="let r of proj.results">{{r}}</li></ul></section>`,styles:['.wrap{padding:2rem 1rem}.cover{width:100%;max-height:360px;object-fit:cover;border-radius:.5rem;margin:.5rem 0}']})
export class ProjectDetailPageComponent implements OnInit {
  proj?: Project;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.proj = this.data.getProjectBySlug(slug);
  }
}
