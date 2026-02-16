import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({selector:'app-hero',standalone:true,imports:[CommonModule,RouterLink],template:`<section class="hero"><div class="txt"><h1>{{title}}</h1><p class="lead">{{subtitle}}</p><div class="actions"><a class="btn" *ngFor="let c of ctas" [routerLink]="c.link">{{c.label}}</a></div></div><div class="img" *ngIf="image"><img [src]="image" [alt]="title"></div></section>`,styles:[`.hero{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;align-items:center;padding:2rem 1rem}.lead{color:#374151}.actions{margin-top:1rem;display:flex;gap:.5rem}.btn{padding:.6rem 1rem;border-radius:.6rem;background:var(--brand);color:white;text-decoration:none;font-weight:700;border:1px solid var(--brand)}.img img{width:100%;border-radius:.75rem;object-fit:cover}@media (max-width:900px){.hero{grid-template-columns:1fr}}`]})
export class HeroComponent{ @Input() title=''; @Input() subtitle=''; @Input() ctas:any[]=[]; @Input() image=''; }
