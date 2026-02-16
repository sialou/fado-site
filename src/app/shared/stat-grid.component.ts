import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({selector:'app-stat-grid',standalone:true, imports: [CommonModule], template:`<section class="stats"><div class="card" *ngFor="let s of stats"><div class="value">{{s.value}}</div><div class="label">{{s.label}}</div></div></section>`,styles:[`.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;padding:1rem}.card{background:white;border-radius:.75rem;padding:1rem;border:1px solid #e5e7eb;text-align:center}.value{font-weight:800;font-size:1.4rem}@media (max-width:900px){.stats{grid-template-columns:1fr 1fr}}@media (max-width:600px){.stats{grid-template-columns:1fr}}`]})
export class StatGridComponent{ @Input() stats:any[]=[]; }
