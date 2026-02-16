import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-project-card',standalone:true,imports:[RouterLink],template:`<article class="card"><img [src]="cover" [alt]="title"><div class="body"><h3>{{title}}</h3><p>{{objective}}</p><a [routerLink]="['/projets', slug]" class="more">Voir →</a></div></article>`,styles:[`.card{border:1px solid #e5e7eb;border-radius:.75rem;overflow:hidden;background:white}img{width:100%;height:180px;object-fit:cover}.body{padding:1rem}.more{font-weight:700;text-decoration:none}`]})
export class ProjectCardComponent{ 
    
  @Input() slug!: string;
  @Input() title!: string;
  @Input() cover?: string;      
  @Input() objective?: string;
    
    }
