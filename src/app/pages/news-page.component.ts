import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';
@Component({standalone:true,selector:'app-news',imports:[NgFor],template:`<section class="wrap"><h1>Actualités</h1><div class="grid"><article *ngFor="let n of data.news" class="card"><img [src]="n.image" [alt]="n.title"><div class="b"><h3>{{n.title}}</h3><div class="muted">{{n.date}}</div><p>{{n.excerpt}}</p></div></article></div></section>`,styles:[`.wrap{padding:2rem 1rem}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.card{border:1px solid #e5e7eb;border-radius:.75rem;overflow:hidden;background:white}img{width:100%;height:160px;object-fit:cover}.muted{color:#6b7280}@media (max-width:900px){.grid{grid-template-columns:1fr}}`]})
export class NewsPageComponent{ constructor(public data: DataService){} }
