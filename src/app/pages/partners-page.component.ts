import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';
@Component({standalone:true,selector:'app-partners',imports:[NgFor],template:`<section class="wrap"><h1>Partenaires</h1><div class="logos"><a *ngFor="let p of data.partners" class="logo" [href]="p.url" target="_blank" rel="noopener"><img [src]="p.logo" [alt]="p.name"></a></div></section>`,styles:[`.wrap{padding:2rem 1rem}.logos{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.logo{background:white;padding:1rem;border-radius:.5rem;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center}.logo img{max-height:48px}@media (max-width:900px){.logos{grid-template-columns:1fr 1fr}}`]})
export class PartnersPageComponent{ constructor(public data: DataService){} }
