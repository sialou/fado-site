import { Component } from '@angular/core';
import { StatGridComponent } from '../shared/stat-grid.component';
import { DataService } from '../core/data.service';
@Component({standalone:true,selector:'app-impact',imports:[StatGridComponent],template:`<section class="wrap"><h1>Impact</h1><p>Nos résultats à date.</p><app-stat-grid [stats]="data.stats"></app-stat-grid></section>`})
export class ImpactPageComponent{ constructor(public data: DataService){} }
